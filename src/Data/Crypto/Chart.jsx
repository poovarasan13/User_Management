export const WidgetsRadialChart = {
  series: [],
  options: {
    chart: {
      height: 150,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 3,
        left: 0,
        blur: 10,
        color: '',
        opacity: 0.35,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        track: {
          strokeWidth: '45%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          showOn: 'always',
          value: {
            color: 'var(--chart-text-color)',
            fontSize: '18px',
            show: true,
            offsetY: -8,
          },
        },
      },
    },
    colors: [],
    stroke: {
      lineCap: 'round',
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 130,
          },
        },
      },
    ],
  },
};

export const myPortfolioChartOption = {
  series: [44, 55, 67],
  options: {
    chart: {
      height: 280,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: false,
        },
        track: {
          background: 'var(--chart-progress-light)',
          opacity: 0.3,
        },
        hollow: {
          margin: 10,
          size: '40%',
          image: '../assets/images/dashboard-4/portfolio-bg.png',
          imageWidth: 230,
          imageHeight: 230,
          imageClipped: false,
        },
      },
    },
    colors: ['#54BA4A', '#FFA539', '#7366FF'],
    labels: ['USD', 'BTC', 'ETH'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [50, 0, 80, 100],
      },
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 260,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 10,
                size: '40%',
                image: '../assets/images/dashboard-4/portfolio-bg.png',
                imageWidth: 190,
                imageHeight: 190,
                imageClipped: false,
              },
            },
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                imageWidth: 260,
                imageHeight: 260,
              },
            },
          },
        },
      },
      {
        breakpoint: 650,
        options: {
          chart: {
            height: 280,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                imageWidth: 220,
                imageHeight: 220,
              },
            },
          },
        },
      },
    ],
  },
};

// Currency Widgets Chart //
export const widgetsLineChart = {
  series: [
    {
      data: [],
    },
  ],
  options: {
    chart: {
      width: 120,
      height: 120,
      type: 'line',
      toolbar: {
        show: false,
      },
      offsetY: 10,
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 6,
        left: 0,
        blur: 6,
        color: [],
        opacity: 0.3,
      },
    },
    grid: {
      show: false,
    },
    colors: [],
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    labels: '',
    markers: {
      size: 0,
    },
    xaxis: {
      // type: 'datetime',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      marker: {
        show: false,
      },
      x: {
        show: false,
      },
      y: {
        show: false,
        labels: {
          show: false,
        },
      },
    },
    responsive: [
      {
        breakpoint: 1790,
        options: {
          chart: {
            width: 100,
            height: 100,
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            width: '100%',
            height: 100,
          },
        },
      },
    ],
  },
};

// market chart
export const MarketGraphOption = {
  series: [
    {
      name: 'TEAM A',
      type: 'column',
      data: [4, 8, 4.5, 8, 13, 8.5, 12, 5, 7, 12],
    },
    {
      name: 'TEAM C',
      type: 'line',
      data: [2, 3, 2, 6, 8, 12, 9, 7, 9, 7],
    },
  ],
  options: {
    chart: {
      height: 300,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: [1],
        top: 0,
        left: 0,
        blur: 15,
        color: 'var(--theme-deafult)',
        opacity: 0.3,
      },
    },
    stroke: {
      width: [0, 3],
      curve: 'smooth',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    colors: ['rgba(170, 175, 203, 0.2)', 'var(--theme-deafult)'],
    grid: {
      borderColor: 'var(--chart-border)',
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },

    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['var(--theme-deafult)', '#d867ac'],
        opacityFrom: 0.8,
        opacityTo: 0.8,
        colorStops: [
          {
            offset: 0,
            color: '#d867ac',
            opacity: 1,
          },
          {
            offset: 30,
            color: '#d867ac',
            opacity: 1,
          },
          {
            offset: 50,
            color: 'var(--theme-deafult)',
            opacity: 1,
          },
          {
            offset: 80,
            color: 'var(--theme-deafult)',
            opacity: 1,
          },
          {
            offset: 100,
            color: 'var(--theme-deafult)',
            opacity: 1,
          },
        ],
      },
    },
    labels: ['Sep 10', 'Sep 15', 'Sep 20', 'Sep 25', 'Sep 30', 'Oct 05', 'Oct 10', 'Oct 15', 'Oct 20', 'Oct 25'],
    markers: {
      size: 0,
    },
    yaxis: {
      min: 0,
      max: 20,
      tickAmount: 5,
      labels: {
        formatter: function (val) {
          return val + 'k';
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Rubik, sans-serif',
          colors: 'var(--chart-text-color)',
        },
      },
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          fontSize: '10px',
          fontFamily: 'Rubik, sans-serif',
          colors: 'var(--chart-text-color)',
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      show: false,
    },
  },
};
