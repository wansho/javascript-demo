
dayjs.extend(window.dayjs_plugin_duration)
// 创建一个包含 86401011ms 的时间长度，并转换成小时
var duration = dayjs.duration(86401011, 'ms').asHours();

console.log(duration);

// 能够直接处理字符串时间
var time = "2022-07-21 00:00:00";
console.log(dayjs(time))
