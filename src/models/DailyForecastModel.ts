export default class DailyForecastModel {
    date: Date
    maximumTemperature: number
    minimumTemperature: number
    dayIconId: number
    nightIconId: number
    dayIconText: string
    nightIconText: string
    temperatureUnit: string

    constructor(params: any) {
        const {
            date,
            maximumTemperature,
            minimumTemperature,
            dayIconId,
            nightIconId,
            dayIconText,
            nightIconText,
            temperatureUnit
        } = params

        this.date = new Date(date)
        this.maximumTemperature = maximumTemperature
        this.minimumTemperature = minimumTemperature
        this.dayIconId = dayIconId
        this.nightIconId = nightIconId
        this.dayIconText = dayIconText
        this.nightIconText = nightIconText
        this.temperatureUnit = temperatureUnit
    }
}