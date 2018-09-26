export default {
    entry: 'dist-npm/index.js',
    dest: 'dist-npm/bundles/my-header-v1.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.my-header-v1',
    globals: {
      '@angular/core': 'ng.core',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }