using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using EdgeJs;
using Newtonsoft.Json;

namespace Demo.ClrToNode
{
    class Program
    {
        public static async Task Start()
        {
            //var func = Edge.Func(@"return require('./../script.js')");

            var script = File.ReadAllText("script.js");
            var func = Edge.Func(script);

            //var person = new Person {FirstName = "Todd", LastName = "Meinershagen"};
            var person = new Person { FirstName = "Tammy", LastName = "Meinershagen" };

            var message = await func(person);
            await Console.Out.WriteLineAsync(message.ToString());
        }

        static void Main(string[] args)
        {
            try
            {
                Start().Wait();
            }
            catch (Exception ex)
            {
                //var realEx = JsonConvert.DeserializeObject<CustomError>(ex.InnerException.Message) ?? ex.InnerException;
                var realEx = GetException(ex);
                Console.WriteLine(realEx);
            }
            
            Console.ReadLine();
        }

        private static Exception GetException(Exception ex)
        {
            var errorType = ex.InnerException.Message.Split(':').FirstOrDefault();
            if (errorType == "BadRequestError")
            {
                return new BadRequestException(ex.InnerException.Message);
            }

            return ex;
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class BadRequestException : Exception
    {
        public BadRequestException(string message) : base(message)
        { }
    }
}
