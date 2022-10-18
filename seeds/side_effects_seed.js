const { Post } = require('../models');

const side_effects = [{
        id:: 01,
        drug_id: 01,
        interactions: "Do Not consume alcohol while taking this medication",
        side_effects: ,
        warnings: "'drowsiness', 'light-headedness', 'headache', 'tiredness', 'dizziness', 'irritability', 'talkativeness', 'difficulty concentrating', 'dry mouth', 'increased salivation', 'changes in sex drive or ability', 'nausea', 'constipation', 'changes in appetite', 'weight changes', 'difficulty urinating', 'joint pain'",
        ndc: "'0009-0029-01', '0009-0029-02', '0009-0029-14', '0009-0029-46', '0009-0055-01', '0009-0055-03', '0009-0055-15', '0009-0055-46', '0009-0090-01', '0009-0090-04', '0009-0090-13', '0009-0094-01', '0009-0094-03' ",
    },
    {
        id:: 02,
        drug_id: 02,
        interactions: "Do Not consume alcohol while taking this medication",
        side_effects: ,
        warnings: "'low blood pressure (hypotension)', 'high blood pressure (hypertension)', 'low blood oxygen (hypoxia)', 'slow heart rate', 'fast heart rate', 'nausea', 'fever', 'headache'",
        ndc: "'71390-011-00', '71390-011-11'",
    },
    {
        id:: 03,
        drug_id: 03,
        interactions: "Do Not consume alcohol while taking this medication",
        side_effects: ,
        warnings: "'drowsiness', 'dizziness', 'tiredness', 'weakness', 'dry mouth', 'diarrhea', 'nausea', 'changes in appetite', 'restlessness or excitement', 'constipation', 'difficulty urinating', 'frequent urination', 'blurred visio', 'changes in sex drive or ability'",
        ndc: "'60687-355-01', '60687-355-11', '60687-367-01', '60687-367-11', '60687-401-01', '60687-401-11'",
    },
    {
        id:: 04,
        drug_id: 04,
        interactions: "Do Not consume alcohol while taking this medication",
        side_effects: ,
        warnings: "'drowsiness', 'dizziness', 'unsteadiness', 'problems with coordination', 'difficulty thinking or remembering', 'increased saliva', 'muscle or joint pain', 'frequent urination', 'blurred vision', 'changes in sex drive or ability'",
        ndc:"'0004-0058-01', '0004-0068-01', '0004-0098-01'",
    },
    {
        id:: 05,
        drug_id: 05,
        interactions: "Avoid alcohol is recommended. If experiencing dizziness, drowsiness and blurred vision, you should not drive or use tools and machinery.",
        side_effects: ,
        warnings: "nausea, 'diarrhea', 'constipation', 'sexual problems in males; decreased sex drive, inability to get or keep an erection, or delayed or absent ejaculation', 'sexual problems in females; decreased sex drive, or delayed orgasm or unable to have an orgasm', 'drowsiness', 'yawning', 'shaking', 'difficulty falling asleep or staying asleep', 'increased sweating', 'dizziness', 'heartburn', 'stomach pain', 'excessive tiredness', 'dry mouth', 'decreased appetite', 'weight loss', 'flu-like symptoms', 'runny nose', 'sneezing'",
        ndc:"'0456-2005-01', '0456-2010-01', '0456-2010-11', '0456-2010-63', '0456-2020-01', '0456-2020-11', '0456-2020-63', '0456-2101-08'",
    },
    {
        id:: 06,
        drug_id: 06,
        interactions: "Avoid alcohol is recommended. If experiencing dizziness, drowsiness and blurred vision, you should not drive or use tools and machinery.",
        side_effects: , 
        warnings: "'nausea', 'diarrhea', 'constipation', 'vomiting', 'difficulty falling asleep or staying asleep', 'dry mouth', 'heartburn', 'loss of appetite', 'weight changes', 'dizziness', 'excessive tiredness', 'headache', 'nervousness', 'uncontrollable shaking of a part of the body', 'sexual problems in males; decreased sex drive, inability to get or keep an erection, or delayed or absent ejaculation', 'sexual problems in females; decreased sex drive, or delayed orgasm or unable to have an orgasm', 'excessive sweating'",
        ndc:"'0049-0050-01', '0049-4900-30', '0049-4900-41', '0049-4900-66', '0049-4900-73', '0049-4900-94', '0049-4910-30', '0049-4910-41', '0049-4910-66', '0049-4910-73', '0049-4910-94', '0049-4960-30', '0049-4960-50'",
    },
    {
        id:: 07,
        drug_id: 07,
        interactions: "Avoid alcohol is recommended. If experiencing dizziness, drowsiness and blurred vision, you should not drive or use tools and machinery.",
        side_effects: ,
        warnings: "'nervousness', 'anxiety', 'difficulty falling asleep or staying asleep', 'nausea', 'diarrhea', 'dry mouth', 'heartburn', 'yawning', 'weakness', 'uncontrollable shaking of a part of the body', 'loss of appetite', 'weight loss', 'unusual dreams', 'stuffy nose', 'sexual problems in males; decreased sex drive, inability to get or keep an erection, or delayed or absent ejaculation', 'sexual problems in females; decreased sex drive, or delayed orgasm or unable to have an orgasm', 'excessive sweating', 'headache', 'confusion', 'weakness', 'difficulty concentrating', 'memory problems'",
        ndc:"'0777-3104-02', '0777-3105-02', '0777-3105-30', '0777-3107-30'",
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;