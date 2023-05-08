using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    /// <inheritdoc />
    public partial class initialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Senarios",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    RiskLevelTargetAreaCode = table.Column<string>(name: "Risk_Level_Target_Area_Code", type: "TEXT", nullable: true),
                    ParticulateMatterPredictedAQI = table.Column<string>(name: "Particulate_Matter_Predicted_AQI", type: "TEXT", nullable: true),
                    PatientAge = table.Column<string>(name: "Patient_Age", type: "TEXT", nullable: true),
                    PatientSex = table.Column<string>(name: "Patient_Sex", type: "TEXT", nullable: true),
                    HomeCode = table.Column<string>(type: "TEXT", nullable: true),
                    AreaCode = table.Column<string>(type: "TEXT", nullable: true),
                    PatientCoMorbidities = table.Column<string>(name: "Patient_Co_Morbidities", type: "TEXT", nullable: true),
                    PatientAllergies = table.Column<string>(name: "Patient_Allergies", type: "TEXT", nullable: true),
                    Recommendations = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Senarios", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Senarios");
        }
    }
}
