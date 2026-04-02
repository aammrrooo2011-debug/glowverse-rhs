/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let settings = app.settings()

    settings.meta.appName = "e8e5ded1-0c29-4cf3-98e6-0d9d9d02a1aa.app-preview.com"
    settings.meta.appURL = "https://e8e5ded1-0c29-4cf3-98e6-0d9d9d02a1aa.app-preview.com/hcgi/platform"
    settings.meta.hideControls = true

    settings.logs.maxDays = 7
    settings.logs.minLevel = 8
    settings.logs.logIP = true
    
    settings.trustedProxy.headers = [
        "X-Real-IP",
        "X-Forwarded-For",
        "CF-Connecting-IP",
    ]

    app.save(settings)
})
