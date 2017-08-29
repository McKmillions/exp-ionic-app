angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.reports', {
    url: '/reports',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reports.html',
        controller: 'reportsCtrl'
      }
    }
  })

  .state('menu.newReport', {
    url: '/newreport',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newReport.html',
        controller: 'newReportCtrl'
      }
    }
  })

  .state('menu.expenses', {
    url: '/expenses',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expenses.html',
        controller: 'expensesCtrl'
      }
    }
  })

  .state('menu.newExpense', {
    url: '/newexpense',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newExpense.html',
        controller: 'newExpenseCtrl'
      }
    }
  })

  .state('addAttendees', {
    url: '/page9',
    templateUrl: 'templates/addAttendees.html',
    controller: 'addAttendeesCtrl'
  })

  .state('menu.quickCaptureReceipt', {
    url: '/qcreceipt',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quickCaptureReceipt.html',
        controller: 'quickCaptureReceiptCtrl'
      }
    }
  })

  .state('menu.receipts', {
    url: '/receipts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/receipts.html',
        controller: 'receiptsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('signIn', {
    url: '/signin',
    templateUrl: 'templates/signIn.html',
    controller: 'signInCtrl'
  })

  .state('signUp', {
    url: '/signup  ',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});