Plotly.d3.csv("https://raw.githubusercontent.com/sjani184/Climate-in-the-US/sjani184/data/cleaned/Climate_Views_Over_Time_WS_data.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1= {
  type: "scatter",
  mode: "lines",
  name: 'Is GW real?',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'Do you think that global warming is happening?'),
  line: {
    color: 'blue',
    width: 3
  }
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Is GW caused by humans?',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'Is global warming caused by humans?'),
  line: {
    color: 'black',
    width: 3
  }
}

var trace3 = {
  type: "scatter",
  mode: "lines",
  name: 'Do Scientists believe GW is happening?',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'Do most scientists believe global warming is happening?'),
  line: {
    color: 'green',
    width: 3
  }
}

var data = [trace1, trace2, trace3];

var layout = {
  title: 'Climate Views Over Time',
  xaxis: {
    automargin: true,
    title:{
      text: 'year',
      standoff: 20
    },
    titlefont: {
      size: 16,
      color: 'black'
    },
  },
  yaxis: {
    title: '% Yes',
    titlefont: {
      size: 14,
      color: 'black'
    },
  },
};

Plotly.newPlot('myDiv', data, layout);
})