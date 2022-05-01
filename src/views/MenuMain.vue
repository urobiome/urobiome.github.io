<template>
<div class="content mainCon">

    <div class="container">
        <h2 class="logo"><span>Rex</span> Urobiome</h2>
        <b-card bg-variant="white" text-variant="dark" class="topCard">
            <b-card-text>
                Welcome,<br>
                <span class="examDate">{{ examDate }}</span><br>
                Test Results
            </b-card-text>
        </b-card>

        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Microbiome Composition">
            <b-card-text>
                <ul class="graphA">
                    <li>
                        <div class="graphAtitle">GU174097_g</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_GU174097_g_72.svg"></div>
                    </li>
                    <li>
                        <div class="graphAtitle">Bifidobacterium</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Bifidobacterium_72.svg"></div>
                    </li>
                    <li>
                        <div class="graphAtitle">Collinsella</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Collinsella_72.svg"></div>
                    </li>
                    <li>
                        <div class="graphAtitle">Blautia</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Blautia_72.svg"></div>
                    </li>
                    <li>
                        <div class="graphAtitle">Ruminococcus_g2</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Ruminococcus_g2_72.svg"></div>
                    </li>
                    <li>
                        <div class="graphAtitle">Escherichia</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Escherichia_72.svg"></div>
                    </li>                   
                    <li>
                        <div class="graphAtitle">Klebsiella</div>
                        <div class="graphA1"><img src="../../public/img/Graph1_155_Klebsiella_72.svg"></div>
                    </li>
                    
                </ul>
            </b-card-text>
        </b-card>
        <ul class="graphPoint">
            <li>
                <b-icon icon="caret-down-fill" class="colorRed"></b-icon> Disease Group Average %
            </li>
            <li>
                <b-icon icon="caret-down-fill" class="colorGreen"></b-icon> Control Group Average %
            </li>
            <li>
                <b-iconstack>
                    <b-icon stacked icon="record-fill" variant="white"></b-icon>
                    <b-icon stacked icon="record" class="colorBlue"></b-icon>                   
                </b-iconstack>
                 Your %
            </li>
        </ul>

        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Disease Risk Estimates">
            <b-card-text>
                <ul class="graphB">
                    <li class="bottomMargin1">                      
                        <div class="graphB1"><img src="../../public/img/Graph2_155_T2D_72.svg"></div>
                        <div class="graphBtitle">
                            <div class="graphBtitleTop">Risk of Diabetes {{ diabetesPercent }}%</div>
                            <div class="graphBtitleNnder">Risk of developing disease within 10 years 
                                <span v-if="diabetesPercent >= 68" :class="rateColor[0]">{{ diabetesRate[0] }}</span>
                                <span v-else-if="diabetesPercent >= 34" :class="rateColor[1]">{{ diabetesRate[1] }}</span>
                                <span v-else-if="diabetesPercent >= 0" :class="rateColor[2]">{{ diabetesRate[2] }}</span>
                            </div>
                        </div>
                    </li>
                    <li>                      
                        <div class="graphB1"><img src="../../public/img/Graph2_155_Obesity_72.svg"></div>
                        <div class="graphBtitle">
                            <div class="graphBtitleTop">Risk of Obesity {{ obesityPercent }}%</div>
                            <div class="graphBtitleNnder">
                                Risk of developing disease within 10 years 
                                <span v-if="obesityPercent >= 68" :class="rateColor[0]">{{ obesityRate[0] }}</span>
                                <span v-else-if="obesityPercent >= 34" :class="rateColor[1]">{{ obesityRate[1] }}</span>
                                <span v-else-if="obesityPercent >= 0" :class="rateColor[2]">{{ obesityRate[2] }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </b-card-text>
        </b-card>
        <ul class="graphPoint">
            <li>
                <b-icon icon="record-fill" class="colorRed"></b-icon> High
            </li>
            <li>
                <b-icon icon="record-fill" class="colorGreen"></b-icon> Moderate
            </li>
            <li>
                <b-icon icon="record-fill" class="colorBlue"></b-icon> Low
            </li>
        </ul>

        <b-card>
            <b-card-text>
                Your microbiome composition is as follows. Within 10 years, your risk of developing diabetes is 
                <span v-if="diabetesPercent >= 68" :class="rateColor[0]">{{ diabetesRate[0] }}</span>
                <span v-else-if="diabetesPercent >= 34" :class="rateColor[1]">{{ diabetesRate[1] }}</span>
                <span v-else-if="diabetesPercent >= 0" :class="rateColor[2]">{{ diabetesRate[2] }}</span>, 
                and your risk of developing obesity is 
                <span v-if="obesityPercent >= 68" :class="rateColor[0]">{{ obesityRate[0] }}</span>
                <span v-else-if="obesityPercent >= 34" :class="rateColor[1]">{{ obesityRate[1] }}</span>
                <span v-else-if="obesityPercent >= 0" :class="rateColor[2]">{{ obesityRate[2] }}</span>.
            </b-card-text>
        </b-card>

        <!--추천관리방법은 diabetesPercent 기준으로 출력됩니다.-->
        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Health Recommendations">
            <b-card-text>
                <ul>
                    <li>         
                        <i class="fi fi-rr-restaurant"></i> Diet
                        <ul class="cardList">
                            <span v-if="diabetesPercent >= 68">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[0] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[1] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 34">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[0] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[1] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 0">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[0] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[1] }}</li>
                            </span>
                        </ul>
                    </li>
                    <li>                      
                        <i class="fi fi-rr-gym"></i> Exercise
                        <ul class="cardList"> 
                            <span v-if="diabetesPercent >= 68">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[2] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[3] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 34">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[2] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[3] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 0">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[2] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[3] }}</li>
                            </span>
                        </ul>
                    </li>
                    <li>                      
                        <i class="fi fi-rr-bed"></i> Lifestyle
                        <ul class="cardList bottomNone">
                            <span v-if="diabetesPercent >= 68">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[4] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateRedText[5] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 34">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[4] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateGreenText[5] }}</li>
                            </span>
                            <span v-else-if="diabetesPercent >= 0">
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[4] }}</li>
                                <li><b-icon icon="check" class="colorBlue"></b-icon> {{ rateBlueText[5] }}</li>
                            </span>
                        </ul>
                    </li>
                </ul>
            </b-card-text>
        </b-card>
    </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            examDate: '2022-01-27',
            diabetesRate: ['High','Moderate','Low'],
            diabetesPercent: 23,
            obesityRate: ['High','Moderate','Low'],
            obesityPercent: 33,
            rateColor: ['colorRed','colorGreen','colorBlue'],
            rateRedText: ['Avoid foods high in simple sugars such as honey.','Eat grains, beans, eggs, and vegetables evenly.','Exercise regularly on expert advice.','Do aerobic exercise three times a week for 20 minutes.','Stop smoking. Stop drinking.','Get regular checkups.'],
            rateGreenText: ['Try switching to a vegetarian diet.','Eating a variety of foods from the 5 major food groups.','Use stairs for buildings with 5 stories or less','Do aerobic exercise twice a week for 20 minutes.','Avoid stress.','Maintain your standard weight.'],
            rateBlueText: ['Eat regularly.','Avoid sweet and salty foods.','Increase your usual activities.','Walk for more than 10 minutes every day.','Don`t stress yourself out about small things.','Get regular sleep time.'],
        };
    },
};
</script>