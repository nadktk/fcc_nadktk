d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then((data) => { drawBarChart(data.data) });

function showDate(date) {
  const a = date.split('-');
  if (a[1] == 1) return `Q1 of ${a[0]}`;
  if (a[1] == 4) return `Q2 of ${a[0]}`;
  if (a[1] == 7) return `Q3 of ${a[0]}`;
  return `Q4 of ${a[0]}`;
}

function drawBarChart(dataset) {

  const dataWithDate = dataset.map( v => {
    const a = v[0].split('-');
    return [new Date(v[0]), v[1], v[0]];
  });

  const w = 925,
      h = 540,
      p = 50;

  const tooltip = d3.select('.container')
    .append('div')
    .text('tooltip')
    .attr('id', 'tooltip');

  const svg = d3.select('.container')
    .append('svg')
    .attr('width', w)
    .attr('height', h)
    .style('background', '#eee');

  const xScale = d3.scaleTime()
    .domain([
      d3.min(dataWithDate, d => d[0] ),
      d3.max(dataWithDate, d => d[0] )
    ])
    .range([p, w - p]);

  const yScale = d3.scaleLinear()
    .domain([d3.max(dataset, (d) => d[1]), 0])
    .range([0, h - 2 * p]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  svg.append('g')
    .attr('id', 'x-axis')
    .call(xAxis)
    .style('transform', `translate(0, ${h-p}px)`);

  svg.append('g')
    .attr('id', 'y-axis')
    .call(yAxis)
    .style('transform', `translate(${p}px, ${p}px)`);

  svg.selectAll('rect')
  .data(dataWithDate)
  .enter()
  .append('rect')
  .attr('class', (d, i) => `bar bar-${i}`)
  .attr('width', 3)
  .attr('height', d => h - 2 * p - yScale(d[1]))
  .attr('fill', 'skyblue')
  .attr('x', (d, i) => 1 + p + i * 3)
  .attr('y', d => p + yScale(d[1]))
  .attr('data-date', d => d[2])
  .attr('data-gdp', d => d[1])
  .on('mouseover', function(d, i) {
    let x = d3.event.clientX;
    let y = d3.event.clientY;
    tooltip.html(showDate(d[2]) + '<br>' + d[1])
      .style('display', 'block')
      .attr('data-date', d[2])
      .style('left', 20 + x + 'px')
      .style('top', 20 + y + 'px');
  })
  .on('mouseout', function(d, i) {
    tooltip.style('display', 'none');
  });
}
