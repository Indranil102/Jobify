import mongoose from 'mongoose';

const roadMapSchema = new mongoose.Schema({
    CareerPath: String,
    Stage1: String,
    Stage2: String,
    Stage3: String,
    Stage4: String,
    Stage5: String,
    Stage6: String,
    Stage7: String,
    Stage8: String,
    Stage9: String,
    Stage10: String,
    Stage11: String,
    Stage12: String,
    Stage13: String,
    Stage14: String,
});


const roadMap = mongoose.model('roadMap', roadMapSchema, 'roadMap');


export default roadMap;
