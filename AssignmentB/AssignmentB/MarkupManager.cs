using System;
using System.Collections.Generic;
using System.Linq;
using System.Resources;
using System.Text;
using System.Threading.Tasks;

namespace AssignmentB
{
    public class MarkupManager
    {
        private int _minimumStops;
        private int _maximumStops;
        private TimeSpan _minimumFlightTime;
        private TimeSpan _maximumFlightTime;
        private TimeSpan _minimumLayoverTime;
        private TimeSpan _maximumLayoverTime;
        private decimal _minimumBasePrice;
        private decimal _maximumBasePrice;

        private decimal _valuePerFlightTime;
        private decimal _valuePerLayoverTime;
        private decimal _valuePerStop;
        private decimal _publishedPrice;


        private void FindMinMaxBasePrice(List<Itinerary> discounted)
        {
            _minimumBasePrice = discounted.ElementAt(0).BaseFareInUSD;
            _maximumBasePrice = 0;
            foreach (var itinerary in discounted)
            {
                if (itinerary.BaseFareInUSD < _minimumBasePrice)
                    _minimumBasePrice = itinerary.BaseFareInUSD;
                else if (itinerary.BaseFareInUSD > _maximumBasePrice)
                    _maximumBasePrice = itinerary.BaseFareInUSD;
            }
        }
        private void FindMinMaxStops(List<Itinerary> discounted)
        {
            _minimumStops = discounted.ElementAt(0).NumberOfStops;
            _maximumStops = 0;
            foreach (var itinerary in discounted)
            {
                if (itinerary.NumberOfStops < _minimumStops)
                    _minimumStops = itinerary.NumberOfStops;
                else if (itinerary.NumberOfStops > _maximumStops)
                    _maximumStops = itinerary.NumberOfStops;
            }
        }
        private void FindMinMaxFlightTime(List<Itinerary> discounted)
        {
            _minimumFlightTime = discounted.ElementAt(0).FlightTime;
            _maximumFlightTime = TimeSpan.MinValue;
            foreach (var itinerary in discounted)
            {
                if (itinerary.FlightTime < _minimumFlightTime)
                    _maximumFlightTime = itinerary.FlightTime;
                else if (itinerary.FlightTime > _maximumFlightTime)
                    _maximumFlightTime = itinerary.FlightTime;
            }
        }
        private void FindMinMaxLayoverTime(List<Itinerary> discounted)
        {
            _minimumLayoverTime = discounted.ElementAt(0).TotalLayoverTime;
            _maximumLayoverTime = TimeSpan.MinValue;

            foreach (var itinerary in discounted)
            {
                if (itinerary.TotalLayoverTime < _maximumLayoverTime)
                    _maximumLayoverTime = itinerary.TotalLayoverTime;
                else if (itinerary.TotalLayoverTime > _maximumLayoverTime)
                    _maximumLayoverTime = itinerary.TotalLayoverTime;
            }
        }
        private void FindMinMaxContent(List<Itinerary> discounted)
        {
            this.FindMinMaxBasePrice(discounted);
            this.FindMinMaxContent(discounted);
            this.FindMinMaxFlightTime(discounted);
            this.FindMinMaxLayoverTime(discounted);
        }

        private void generateParameters(Itinerary discounted)
        {
            decimal priceDiff = _publishedPrice - discounted.BaseFareInUSD;
            decimal parameterCount = 0;
            ResourceManager resourceManager = new ResourceManager(typeof(Resource));
            string myString = resourceManager.GetString("CompareParametersCount");
            if (Decimal.TryParse(myString, out parameterCount) == false)
                throw new Exception();

            decimal perParameterPrice = priceDiff / parameterCount;
            _valuePerStop = perParameterPrice / (_maximumStops - _minimumStops);
            _valuePerFlightTime = perParameterPrice / (_maximumFlightTime - _minimumFlightTime).Minutes;
            _valuePerLayoverTime = perParameterPrice / (_maximumLayoverTime - _minimumLayoverTime).Minutes;
            
        }

        private decimal GetMarkup(Itinerary discounted)
        {
            this.generateParameters(discounted);
            decimal markup = 0;
            markup += (_maximumStops - discounted.NumberOfStops) * _valuePerStop;
            markup += (_maximumFlightTime - discounted.FlightTime).Minutes * _valuePerFlightTime;
            markup += (_maximumLayoverTime - discounted.TotalLayoverTime).Minutes * _valuePerLayoverTime;
            return markup;
        }
        public List<Itinerary> CalculateMarkup(Itinerary published, List<Itinerary> discounted)
        {
            if (published == null || discounted == null)
                throw new ArgumentNullException();

            this._publishedPrice = published.BaseFareInUSD;
            this.FindMinMaxContent(discounted);
            for(int i=0;i<discounted.Count();i++)
            {
                var markup=GetMarkup(discounted.ElementAt(i));
                discounted.ElementAt(i).MarkupInUSD = markup;
            }
            return discounted;
        }
    }
}
