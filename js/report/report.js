fetch('http://127.0.0.1:5000/report/')
  .then((response) => response.json())
  .then((report) => {
    let template = createReportTemplate(report)
    $('#report').append(template)
  })

function createReportTemplate(report) {
  let template = $('#report-template')[0].innerHTML
  return Mustache.render(template, report)
}
