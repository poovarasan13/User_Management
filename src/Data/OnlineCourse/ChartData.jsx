import holloRound from '../../assets/images/dashboard-3/round.png';
export const todayProgressData = {
  series: [38, 60],
  options: {
    chart: {
      width: 240,
      height: 360,
      type: 'radialBar',
      offsetX: -28,
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            offsetY: 20,
            color: 'var(--chart-text-color)',
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 500,
          },
          value: {
            fontSize: '22px',
            offsetY: -16,
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 500,
            color: 'var(--chart-text-color)',
          },
          total: {
            show: true,
            label: 'Task Done!',
            fontSize: '12px',
            color: 'var(--chart-text-color)',
            formatter: function () {
              return '89%';
            },
          },
        },
        hollow: {
          margin: 5,
          size: '70%',
          image: holloRound,
          imageWidth: 115,
          imageHeight: 115,
          imageClipped: false,
        },
        track: {
          background: 'transparent',
        },
      },
    },
    colors: ['var(--theme-deafult)', '#FFA941'],
    labels: ['Progress', 'Done'],
    stroke: {
      lineCap: 'round',
    },
    legend: {
      show: true,
      position: 'bottom',
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
        breakpoint: 1830,
        options: {
          chart: {
            offsetX: -40,
          },
        },
      },
      {
        breakpoint: 1750,
        options: {
          chart: {
            offsetX: -50,
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            offsetX: -10,
          },
        },
      },
      {
        breakpoint: 1530,
        options: {
          chart: {
            offsetX: -25,
          },
        },
      },
      {
        breakpoint: 1400,
        options: {
          chart: {
            offsetX: 10,
          },
        },
      },
      {
        breakpoint: 1300,
        options: {
          chart: {
            offsetX: -10,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 255,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            width: 245,
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 225,
          },
        },
      },
    ],
  },
};

export const LearningOverviewChartData = {
  series: [
    {
      name: 'growth',
      type: 'line',
      data: [25, 30, 43, 25, 38, 25, 33, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 30, 41, 25, 36, 25, 31, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 29, 37, 25, 34, 25, 29, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 28, 34, 25, 32, 25, 28, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 27, 30, 25, 28, 25, 27, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 26, 24, 25, 24, 25, 24, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 26, 20, 25, 21, 25, 23, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 24, 16, 25, 18, 25, 22, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 23, 12, 25, 15, 25, 21, 25],
    },
    {
      name: 'growth',
      type: 'line',
      data: [25, 23, 10, 25, 13, 25, 19, 25],
    },
    {
      name: 'growth',
      type: 'area',
      data: [25, 28, 37, 25, 33, 25, 27, 25],
    },
  ],
  options: {
    chart: {
      height: 315,
      type: 'line',
      toolbar: {
        show: false,
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
    colors: ['var(--theme-deafult)', '#F47DEA', '#FFA941', '#FFC200', '#54BA4A', '#3DA831', '#57B9F6', '#FF3377', '#773ACE', '#945CFF', '#7366ff'],
    stroke: {
      width: 1.5,
      curve: 'smooth',
    },
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 0,
          fillColor: '#7064F5',
          strokeColor: 'var(--white)',
          size: 6,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: '#7064F5',
          strokeColor: 'var(--white)',
          size: 6,
        },
        {
          seriesIndex: 2,
          dataPointIndex: 3,
          fillColor: '#7064F5',
          strokeColor: 'var(--white)',
          size: 6,
        },
      ],
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
    xaxis: {
      type: 'category',
      categories: ['Sep 5', 'Sep 8', 'Sep 12', 'Sep 16', 'Sep 18', 'Sep 17', 'Sep 23', 'Sep 26'],
      tickAmount: 12,
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
      type: ['solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'solid', 'gradient'],
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 80, 100],
      },
    },
    yaxis: {
      min: 0,
      max: 50,
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
        breakpoint: 1661,
        options: {
          chart: {
            height: 265,
          },
        },
      },
    ],
  },
};

export const ActivityHoursChartData = {
  series: [
    {
      name: 'Activity',
      data: [2, 4, 2.5, 1.5, 5.5, 1.5, 4],
    },
  ],
  options: {
    chart: {
      height: 300,
      type: 'bar',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        // enabledOnSeries: undefined,
        top: 10,
        left: 0,
        blur: 5,
        color: '#7064F5',
        opacity: 0.35,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '30%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'Rubik, sans-serif',
          colors: 'var(--chart-text-color)',
        },
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
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        formatter: function (val) {
          return val + ' ' + 'Hr';
        },
        style: {
          fontSize: '12px',
          fontFamily: 'Rubik, sans-serif',
          colors: 'var(--chart-text-color)',
        },
      },
    },
    grid: {
      borderColor: 'var(--chart-dashed-border)',
      strokeDashArray: 5,
    },
    colors: ['#7064F5', '#8D83FF'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        gradientToColors: ['#7064F5', '#8D83FF'],
        opacityFrom: 0.98,
        opacityTo: 0.85,
        stops: [0, 100],
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
  },
};

export const UpcomingOptionsChartData = {
  series: [
    {
      data: [
        {
          x: 'Team Meetup',
          y: [new Date('2022-01-20').getTime(), new Date('2022-03-8').getTime()],
          strokeColor: 'var(--theme-deafult)',
          fillColor: 'var(--white)',
        },
        {
          x: 'Theme Development',
          y: [new Date('2022-01-8').getTime(), new Date('2022-02-30').getTime()],
          strokeColor: '#54BA4A',
          fillColor: 'var(--white)',
        },
        {
          x: 'UI/UX Design',
          y: [new Date('2022-02-01').getTime(), new Date('2022-03-10').getTime()],
          strokeColor: '#FFAA05',
          fillColor: 'var(--white)',
        },
        {
          x: 'Logo Creater',
          y: [new Date('2022-02-10').getTime(), new Date('2022-03-15').getTime()],
          strokeColor: '#FF3364',
          fillColor: 'var(--white)',
        },
      ],
    },
  ],
  options: {
    chart: {
      height: 305,
      type: 'rangeBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: '50%',
        dataLabels: {
          hideOverflowingLabels: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        return label;
      },
      textAnchor: 'middle',
      offsetX: 0,
      offsetY: 0,
      background: {
        enabled: true,
        foreColor: 'var(--chart-text-color)',
        padding: 10,
        borderRadius: 12,
        borderWidth: 1,
        opacity: 0.9,
      },
    },
    xaxis: {
      type: 'datetime',
      position: 'top',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ['var(--light-background)', 'var(--white)'],
        opacity: 1,
      },
    },
    stroke: {
      width: 2,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
        },
      },
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
        },
      },
    },
    responsive: [
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 295,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 370,
          },
        },
      },
      {
        breakpoint: 575,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  },
};

export const LessonChartOption = {
  series: [],

  options: {
    chart: {
      type: 'donut',
      height: 80,
    },
    colors: [],
    legend: {
      show: false,
    },
    stroke: {
      width: 1,
      colors: 'var(--white)',
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              fontSize: '11px',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 400,
              color: 'var(--chart-text-color)',
              offsetY: -12,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: false,
              label: 'Total',
              fontSize: '11px',
              fontFamily: 'Rubik, sans-serif',
            },
          },
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
        },
      },
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
        },
      },
    },
  },
};
