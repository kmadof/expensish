using System;
using System.Linq;
using Expensish.Api.Controllers;
using Xunit;

namespace Expensish.Api.Tests
{
    public class ValuesControllerTests
    {
        [Fact]
        public void ShouldControllerReturnTwoValuesOnGet()
        {
            var controller = new ValuesController();

            var values = controller.Get();

            Assert.Equal(2, values.Value.Count());
        }

        [Fact]
        public void Test2()
        {
            var flag = true;
            Assert.True(flag);
        }
    }
}
