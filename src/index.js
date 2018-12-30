if (typeof navigator.serviceWorker !== 'undefined') {
  navigator.serviceWorker.register('service-worker.js').then(function (info) {
    console.log('service worker registered!', info.scope)
  })
}

let template = '<header>\n' +
  '  <img src="{{logo}}" />\n' +
  '  <p>{{title}}</p>\n' +
  '</header>\n' +
  '\n' +
  '<main>\n' +
  '  <section>{{body}}</section>\n' +
  '</main>\n' +
  '\n' +
  '<footer>\n' +
  '  <p>{{end}}</p>\n' +
  '</footer>'

let data = {
  logo: 'favicon.ico',
  title: 'Ice Zero',
  body: 'Ice Zero\'s PWA Demo',
  end: 'Copyright ???'
}

let content = ''

for (let key in data) {
  content += template.replace(`{{${key}}}`, data[key])
}

document.getElementById('app').innerHTML = content
