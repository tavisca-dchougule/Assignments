using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AssignmentB.Tests.Model;

namespace AssignmentB.Tests
{
    [TestClass]
    public class MarkupManagerTests
    {
        System.Collections.Generic.List<Itinerary> list = new System.Collections.Generic.List<Itinerary>();
        public MarkupManagerTests()
        {
            list.Add(DataAdapter.GetDiscounted1Itinerary());
            list.Add(DataAdapter.GetDiscounted2Itinerary());
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void NullArgumentsToCalculateMarkupShouldThrowException()
        {
            MarkupManager manager = new MarkupManager();
            manager.CalculateMarkup(null,null);
            
        }
        [TestMethod]
        public void ValidArgumentsToCalculateMarkup()//ShouldReturnListWithMarkupCalculated
        {
            MarkupManager manager = new MarkupManager();
            manager.CalculateMarkup(DataAdapter.GetPublishedItinerary(), list);

        }
    }
}
