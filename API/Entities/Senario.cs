using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Senario
    {
        public int Id { get; set; }
        public string? Risk_Level_Target_Area_Code { get; set; }
        public string? Particulate_Matter_Predicted_AQI { get; set; }
        public string? Patient_Age { get; set; }
        public string? Patient_Sex { get; set; }
        public string? HomeCode{ get; set; }
        public string? AreaCode { get; set; }
        public string? Patient_Co_Morbidities { get; set; }

        public string? Patient_Allergies { get; set; }
        public string? Recommendations{ get; set; }
        

    }
}