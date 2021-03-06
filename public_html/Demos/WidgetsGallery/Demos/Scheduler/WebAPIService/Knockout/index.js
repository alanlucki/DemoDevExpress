window.onload = function() {
    var url = "https://js.devexpress.com/Demos/Mvc/api/SchedulerData";
    var viewModel = {
        schedulerOptions: {
            dataSource: DevExpress.data.AspNet.createStore({
                key: "AppointmentId",
                loadUrl: url + "/Get",
                insertUrl: url + "/Post",
                updateUrl: url + "/Put",
                deleteUrl: url + "/Delete",
                onBeforeSend: function(method, ajaxOptions) {
                    ajaxOptions.xhrFields = { withCredentials: true };
                }
            }),
            remoteFiltering: true,
            views: ["day", "workWeek", "month"],
            currentView: "day",
            currentDate: new Date(2017, 4, 23),
            startDayHour: 9,
            endDayHour: 19,
            height: 600,
            textExpr: "Text",
            startDateExpr: "StartDate",
            endDateExpr: "EndDate",
            allDayExpr: "AllDay"
        }
    };
    
    ko.applyBindings(viewModel, document.getElementById("scheduler-demo"));
};