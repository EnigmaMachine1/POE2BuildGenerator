using Poe2BuildGeneratorBE.DTO;
using System;
using System.IO;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Poe2BuildGeneratorBE.Api
{
    public class Generator
    {
        public GeneratorResponse GenerateBuild() {
            string generatorJson = File.ReadAllText("/json/Generator.json");
            dynamic jsonData = JsonSerializer.Deserialize<dynamic>(generatorJson);
            return new GeneratorResponse();
        }
    }
}
