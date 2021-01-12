export const convertTime = (inputTime) => {
    let hours = inputTime.split(":")[0];
    let minutes = inputTime.split(":")[1];

    let outTime = inputTime;

    if (hours == 0){
        outTime = `12:${minutes}AM`;
    }else if (hours >= 12){
        outTime = `${hours-12}:${minutes}PM`;
    }

    return outTime;
}