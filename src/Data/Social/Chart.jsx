import FollowerGenderImage from '../../assets/images/dashboard-5/follower.png';

export const RadialProgressChart = {
  series: [],
  options: {
    chart: {
      height: 130,
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
          strokeWidth: '60%',
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          showOn: 'always',
          value: {
            color: 'var(--body-font-color)',
            fontSize: '14px',
            show: true,
            offsetY: -10,
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

export const InstagramSubscriptionChart = {
  series: [
    {
      name: 'growth',
      type: 'line',
      data: [12, 10, 25, 12, 30, 10, 55, 45, 60],
    },
    {
      name: 'growth',
      type: 'line',
      data: [10, 15, 20, 18, 38, 25, 55, 35, 60],
    },
  ],
  options: {
    chart: {
      height: 265,
      type: 'line',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 8,
        left: 0,
        blur: 2,
        color: ['#FFA941', '#7366FF'],
        opacity: 0.1,
      },
    },
    grid: {
      show: true,
      borderColor: 'var(--chart-border)',
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    colors: ['#FFA941', '#7366FF'],
    stroke: {
      width: 2,
      curve: 'smooth',
      opacity: 1,
    },
    markers: {
      discrete: [
        {
          seriesIndex: 1,
          dataPointIndex: 4,
          fillColor: '#7064F5',
          strokeColor: 'var(--white)',
          size: 6,
        },
      ],
    },
    tooltip: {
      shared: false,
      intersect: false,
      marker: {
        width: 5,
        height: 5,
      },
    },
    xaxis: {
      type: 'category',
      categories: ['Sep 5', 'Sep 8', 'Sep 12', 'Sep 16', 'Sep 18', 'Sep 17', 'Sep 23', 'Sep 26', 'Sep 30'],
      tickAmount: 12,
      crosshairs: {
        show: false,
      },
      labels: {
        style: {
          colors: 'var(--chart-text-color)',
          fontSize: '12px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 1,
        opacityFrom: 0.95,
        opacityTo: 1,
        stops: [0, 90, 100],
      },
    },
    yaxis: {
      min: 10,
      max: 60,
      tickAmount: 5,
      labels: {
        style: {
          colors: 'var(--chart-text-color)',
          fontSize: '12px',
          fontFamily: 'Rubik, sans-serif',
          fontWeight: 400,
        },
      },
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1694,
        options: {
          chart: {
            height: 240,
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 265,
          },
        },
      },
      {
        breakpoint: 1412,
        options: {
          chart: {
            height: 240,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 260,
          },
        },
      },
      {
        breakpoint: 1040,
        options: {
          chart: {
            height: 240,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 255,
          },
        },
      },
    ],
  },
};

export const SmallWidgetsChartOption = {
  series: [],
  options: {
    chart: {
      width: 125,
      height: 150,
      type: 'line',
      sparkline: {
        enabled: true,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 8,
        left: 0,
        blur: 3,
        color: '',
        opacity: 0.2,
      },
    },
    markers: {
      hover: {
        size: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    grid: {
      show: false,
    },
    tooltip: {
      x: {
        show: false,
      },
      z: {
        show: false,
      },
    },
    annotations: {
      points: [
        {
          x: 90,
          y: 58,
          marker: {
            size: 4,
            fillColor: '',
            strokeColor: 'var(--white)',
            radius: 2,
          },
        },
      ],
    },
    colors: [],
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.95,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: '',
            opacity: 0.1,
          },
          {
            offset: 30,
            color: '',
            opacity: 0.8,
          },
          {
            offset: 80,
            color: '',
            opacity: 1,
          },
          {
            offset: 100,
            color: '',
            opacity: 0.1,
          },
        ],
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1750,
        options: {
          chart: {
            width: 80,
          },
          annotations: {
            points: [
              {
                x: 73,
                y: 58,
                marker: { strokeColor: 'var(--white)', size: 4, radius: 2 },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            width: 120,
          },
          annotations: {
            points: [
              {
                x: 115,
                y: 58,
                marker: { strokeColor: 'var(--white)', size: 4, radius: 2 },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1510,
        options: {
          chart: {
            width: 90,
          },
          annotations: {
            points: [
              {
                x: 85,
                y: 58,
                marker: { strokeColor: 'var(--white)', size: 4, radius: 2 },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1378,
        options: {
          chart: {
            width: 55,
          },
          annotations: {
            points: [
              {
                x: 50,
                y: 58,
                marker: {
                  size: 4,
                  strokeColor: 'var(--white)',
                  radius: 2,
                },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1288,
        options: {
          chart: {
            width: 45,
          },
          annotations: {
            points: [
              {
                x: 40,
                y: 58,
                marker: {
                  size: 4,
                  strokeColor: 'var(--white)',
                  radius: 2,
                },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 110,
          },
          annotations: {
            points: [
              {
                x: 105,
                y: 58,
                marker: {
                  size: 4,
                  strokeColor: 'var(--white)',
                  radius: 2,
                },
              },
            ],
          },
        },
      },
      {
        breakpoint: 1080,
        options: {
          chart: {
            width: 85,
          },
          annotations: {
            points: [
              {
                x: 80,
                y: 58,
                marker: {
                  size: 4,
                  strokeColor: 'var(--white)',
                  radius: 2,
                },
              },
            ],
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 110,
          },
          annotations: {
            points: [
              {
                x: 105,
                y: 58,
                marker: {
                  size: 4,
                  strokeColor: 'var(--white)',
                  radius: 2,
                },
              },
            ],
          },
        },
      },
    ],
  },
};

export const FollowerGenderChart = {
  series: [70, 60],
  options: {
    chart: {
      width: 325,
      height: 325,
      type: 'radialBar',
      dropShadow: {
        enabled: true,
        top: 5,
        left: 8,
        blur: 8,
        color: 'var(--theme-deafult)',
        opacity: 0.2,
      },
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 5,
          size: '70%',
          image: FollowerGenderImage,
          imageWidth: 50,
          imageHeight: 50,
          imageClipped: false,
        },
        track: {
          background: 'transparent',
        },
      },
    },
    colors: ['var(--theme-deafult)', '#FFA941'],
    labels: ['Male', 'Female'],
    stroke: {
      lineCap: 'round',
    },
    legend: {
      show: true,
      position: 'right',
      horizontalAlign: 'center',
      offsetY: -15,
      fontSize: '14px',
      fontFamily: 'Rubik, sans-serif',
      fontWeight: 500,
      labels: {
        colors: 'var(--chart-text-color)',
      },
      markers: {
        width: 6,
        height: 6,
      },
    },
    responsive: [
      {
        breakpoint: 718,
        options: {
          chart: {
            width: '100%',
            height: 230,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  },
};

export const ViewChartOption = {
  series: [
    {
      name: 'view',
      data: [20, 45, 30, 50],
    },
  ],
  option: {
    chart: {
      height: 305,
      type: 'line',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 8,
        left: 0,
        blur: 3,
        color: 'var(--theme-deafult)',
        opacity: 0.2,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    grid: {
      row: {
        colors: ['var(--view-grid-bg)', 'transparent'],
        opacity: 0.5,
      },
      column: {
        colors: ['var(--view-grid-bg)', 'transparent'],
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },

    tooltip: {
      x: {
        show: false,
      },
      z: {
        show: false,
      },
    },
    colors: ['var(--theme-deafult)'],
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.95,
        opacityTo: 1,
        // stops: [0,100]
        colorStops: [
          {
            offset: 0,
            color: 'var(--theme-deafult)',
            opacity: 0.05,
          },
          {
            offset: 30,
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
            opacity: 0.1,
          },
        ],
      },
    },
    annotations: {
      points: [
        {
          x: 'Feb',
          y: 44,
          marker: {
            size: 15,
            fillColor: '#7366FF',
            strokeColor: 'var(--view-border-marker)',
            strokeWidth: 20,
            radius: 2,
            cssClass: 'apexcharts-custom-class',
          },
        },
      ],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
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
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 200,
          },
        },
      },
      {
        breakpoint: 481,
        options: {
          annotations: {
            points: [
              {
                x: 'Feb',
                y: 44,
                marker: {
                  size: 10,
                  fillColor: '#7366FF',
                  strokeColor: '#cfcdfc',
                  strokeWidth: 7,
                  radius: 2,
                  cssClass: 'apexcharts-custom-class',
                },
              },
            ],
          },
        },
      },
    ],
  },
};
