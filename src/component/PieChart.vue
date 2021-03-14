<script>
  import { Pie } from 'vue-chartjs'

  export default {
    extends: Pie,
    data () {
      return {
        chartData: {
          labels: [],
          datasets: [{
            borderWidth: 1,
            borderColor: [
              'rgba(176, 133, 255, 1)',
              'rgba(133, 92, 248, 1)',
              'rgba(80, 55, 149, 1)',
              'rgba(226, 137, 242, 1)'
            ],
            backgroundColor: [
              'rgba(176, 133, 255, 1)',
              'rgba(133, 92, 248, 1)',
              'rgba(80, 55, 149, 1)',
              'rgba(226, 137, 242, 1)',
            ],
            data: []
          }]
        },
        options: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              boxWidth: 6,
              fontSize: 10,
              padding: 15
            },
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.fetchReports();
    },
    methods: {
      // Reports
      fetchReports: function () {
        let labels = [];
        let totals = [];
        let self = this;
        fetch("/api/reports")
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let reports = data.reports;
          reports.map((item) => {
            labels.push(item.category); 
            totals.push(item.total)
          });
          self.chartData.labels = labels;
          self.chartData.datasets[0].data = totals;
        })
        .then(() => {
          this.renderChart(this.chartData, this.options)
        })
        .catch( error => { 
          console.log(error);
        })
      }
    }
  };
</script>