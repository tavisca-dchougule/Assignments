using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AssignmentB.Tests.Model
{
    public class DataAdapter
    {
       public static Itinerary GetPublishedItinerary()
        {
            var itinerary = new Itinerary();
            itinerary.OriginAirportCode ="001";
            itinerary.DestinationAirportCode = "005";
            itinerary.FlightTime = new TimeSpan(5, 0, 0);
            itinerary.NumberOfStops = 3;
            itinerary.TotalLayoverTime = new TimeSpan(1, 0, 0);
            itinerary.Airline = "airways";
            itinerary.UtcDepartureTime = DateTime.UtcNow;
            itinerary.UtcArrivalTime = DateTime.UtcNow;
            itinerary.BaseFareInUSD = 150;
            itinerary.MarkupInUSD = 0;
            return itinerary;
        }
       public static Itinerary GetDiscounted1Itinerary()
       {
           var itinerary = new Itinerary();
           itinerary.OriginAirportCode = "001";
           itinerary.DestinationAirportCode = "005";
           itinerary.FlightTime = new TimeSpan(7, 0, 0);
           itinerary.NumberOfStops = 2;
           itinerary.TotalLayoverTime = new TimeSpan(2, 0, 0);
           itinerary.Airline = "airways";
           itinerary.UtcDepartureTime = DateTime.UtcNow;
           itinerary.UtcArrivalTime = DateTime.UtcNow;
           itinerary.BaseFareInUSD = 100;
           itinerary.MarkupInUSD = 0;
           return itinerary;
       }
       public static Itinerary GetDiscounted2Itinerary()
       {
           var itinerary = new Itinerary();
           itinerary.OriginAirportCode = "001";
           itinerary.DestinationAirportCode = "005";
           itinerary.FlightTime = new TimeSpan(5, 0, 0);
           itinerary.NumberOfStops = 3;
           itinerary.TotalLayoverTime = new TimeSpan(1, 0, 0);
           itinerary.Airline = "airways";
           itinerary.UtcDepartureTime = DateTime.UtcNow;
           itinerary.UtcArrivalTime = DateTime.UtcNow;
           itinerary.BaseFareInUSD = 120;
           itinerary.MarkupInUSD = 0;
           return itinerary;
       }
    }
}
