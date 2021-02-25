const marksWeight = 78;
const marksHeight = 1.69;
const marksBMI = marksWeight / marksHeight ** 2;

const johnsWeight = 92;
const johnsHeight = 1.95;
const johnsBMI = johnsWeight / johnsHeight ** 2;

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI ${marksBMI} is heigher than John's ${johnsBMI}`)
} else {
    console.log(`John's BMI ${johnsBMI} is heigher than Mark's ${marksBMI}`)
}