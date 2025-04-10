using System.Xml.Linq;
using System;

namespace Poe2BuildGeneratorBE.DTO
{
    public class GeneratorResponse
    {
        private string Weapon { get; set; }
        private string DefenseType { get; set; }
        private string Class { get; set; }
        private string Ascendency { get; set; }
        private string MainSkill { get; set; }

        public GeneratorResponse() { }
    }
}
