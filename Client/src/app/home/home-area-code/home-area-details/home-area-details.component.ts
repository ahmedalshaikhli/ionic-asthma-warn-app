import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home-area-details',
  templateUrl: './home-area-details.component.html',
  styleUrls: ['./home-area-details.component.scss'],
})

export class HomeAreaDetailsComponent implements OnInit {
  patientAge?: string;
  patientSex?: string;
  homeCode?: string;
  areaCode?: string;
  senario?: any[] = [];
 
  constructor( private location: Location) {
    Chart.register(...registerables);
  }


  ngOnInit(){
 
    
      // Fetch saved form submit values from localStorage

   var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'CO',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
        }, {
          label: 'NO2',
          data: [8, 15, 10, 7, 11, 13], // Add CO data here
          borderWidth: 2
        }, {
          label: 'SO2',
          data: [5, 9, 12, 8, 6, 14], // Add NO2 data here
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Week of 12th December 2022',
            font: {
              size: function(context) { // Use a function to set dynamic font size
                var width = context.chart.width; // Get the chart width
                return width < 600 ? 14 : 18; // Set different font size for different chart widths
              },
              weight: 'bold'
            },
            align: 'center', // Set the alignment of the title to center
            padding: {
              top: 10 // Add top padding to the title for better alignment
            }
          }
        }
      }
    });
 
//doughnut chart
  var mydoughnutChart = new Chart("mydoughnutChart", {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue'],
        datasets: [{
          label: 'CO',
          data: [2, 8],
          backgroundColor:[
            'rgb(168, 90, 166)',
            'rgb(213, 177, 250)'
          ],
          borderColor:[
            'rgb(182 168 195)',
            'rgb(182 168 195)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: 270,
        cutout: '70%',
        aspectRatio: 2,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            filter: (tooltipItem) => {
              return tooltipItem.dataIndex === 0;
            }
          },
          title: {
            display: false,
            padding: {
              top: 10 // Add top padding to the title for better alignment
            }
          },
        }
      }
    }); 

    this.getHomeCode();
}

getHomeCode(){
  const formSubmitValuesString = localStorage.getItem('formSubmitValues');
  if (formSubmitValuesString !== null) {
    const formSubmitValues = JSON.parse(formSubmitValuesString);
    // Use the saved values to fetch data or update component properties as needed
    const { patientAge, patientSex, homeCode, areaCode, senario} = formSubmitValues;
    // Assign the retrieved values to component properties
    this.patientAge = patientAge;
    this.patientSex = patientSex;
    this.homeCode = homeCode;
    this.areaCode = areaCode;
    this.senario = senario;
  }

}
  goBack(): void {
    // Use the location service to navigate back to the previous location
    this.location.back();
  }
}
