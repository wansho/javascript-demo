
dayjs.extend(window.dayjs_plugin_duration)
// 创建一个包含 86401011ms 的时间长度，并转换成小时
var duration = dayjs.duration(86401011, 'ms').asHours();

console.log(duration);

