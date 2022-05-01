<template>

  <div class="content">
    <div class="titleTop backBlue">
      <img class="fi fi-rr-angle-left" src="../../public/img/angle-left.svg" @click="goback">
      <h5>Urobiome</h5>
    </div>
    <div class="container subCon">
      <div class="subTop">
        <img src="../../public/img/dna.png">
        <div class="subTopTxt">
          <h5>What is the urobiome?!</h5>
          The urobiome is the microbiome* found in the urinary tract.<br>
          <div class="smallTxt">*The term ‘microbiome’ describes all microbes that inhabit the human body.</div>
        </div>
      </div>   
        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Why does the urobiome matter?">
            <b-card-text>
                <div class="cardTxt">
                The human microbiome, referred to as the "second genome," comprises the collection of all microorganisms living in the human body, 
                as well as all of the genetic material within this microbiota. In any human body weighing about 70 kilograms, the microbiome is estimated to have around 38 trillion microbial cells. Because of this, the microbiome, which evolves over time since birth, is known to play an important role in human health and disease.
                </div>
            </b-card-text>
        </b-card>
        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="What is the role of the microbiome?">
            <b-card-text>
                <div class="cardTxt">
                The microbiome plays an essential role for regulating human health. It aids in digestion and prevents disease-causing bacteria from sticking to 
                the intestinal wall. It also helps lower cholesterol levels (which reduces the risk of heart disease), regulate blood sugar, and produce brain neurotransmitters.
                </div>
            </b-card-text>
        </b-card>
        <b-card bg-variant="white" text-variant="dark" class="basicCard bottomNone" header="How can I maintain a healthy microbiome?">
            <b-card-text>
                <div class="cardTxt">
                Maintain a balanced microbiome by preventing the growth of harmful bacteria and promoting
                the growth of beneficial bacteria. Strengthen your microbiome by eating less artificial sweeteners that
                stimulate harmful bacterial growth. Instead, eat foods that promote healthy bacterial growth, such as foods rich in prebiotics, whole grains, and polyphenols, as well as fermented foods. Recommended foods include legumes, yogurt, bananas
                , oats, apples, olive oil, dark chocolate, red wine, and various vegetables, such as asparagus.
                </div>
            </b-card-text>
        </b-card>


        <div class="subTop">
        <img src="../../public/img/graph.png">
        <div class="subTopTxt">
          <h5>Rex Urobiome</h5>
          <div class="smallTxt">A health solution service based on statistical data and evidence.</div>
        </div>
      </div>   
        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Advantages">
            <b-card-text>
              Microbiome Recovery and Sequencing Technology
                <ul class="cardList bottomNone">
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Our service possesses advanced experimental technology for recovering and sequencing microbiomes from biomass samples in real time.
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Our team has developed the world’s first nanovirus microbiome analysis technology and has published it in a top journal in respiratory medicine.
                  </li>
                  <li>
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Our team has developed experimental protocols for next-generation sequencing (NGS) library preparation, which have resulted in numerous successful recoveries and sequencing experiences from microbiological samples (ex. lung, blood, liver tissue) and has been formally adopted as Illumina protocols.
                  </li>
                </ul>                
            </b-card-text>
            <b-card-text>
              Bio-Big Data Processing Technology
                <ul class="cardList bottomNone">
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Developed high-performance genomic data processing technology (ONETool); published in Bioinformatics (2018)
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Developed phylogenetic tree-based microbiome analysis technology (TMAT); published in Bioinformatics (2020)
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Developed disease prediction model by incorporating family history information; published in Genetics (2017)
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Developed integrated analysis technology for genome, transcriptome, metabolite, and microbiome interaction
                  </li>
                  <li>
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Developed and commercialized semi-automated data analysis software Rex (2018); used for over 1 million analyses
                  </li>
                </ul>                
            </b-card-text>
        </b-card>
        <b-card bg-variant="white" text-variant="dark" class="basicCard" header="Urobiome Disease Risk Prediction Technology">
            <b-card-text>
              Diabetes Risk Prediction 
                <ul class="cardList bottomNone">
                  <li class="bottomMargin05 colorBlue">
                    Prediction of Diabetes Risk with Urinary Lachnospiraceae Signature
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Technology for analyzing the relationship between gut and urinary microbiota in diabetic patients; published in Scientific Reports (2019), Type-2 Diabetics Reduces Spatial Variation of Microbiome Based on Extracellular Vesicles from Gut Microbes across Human Body
                  </li>
                  <li class="bottomMargin05">
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Technology for analyzing the relationship between the human microbiome, genome, and metabolome; developed technique for analyzing the metagenome/metabolome/genome, and secured patent for urobiome analysis technology (Application No: 10-2020-0088766)
                  </li>
                  <li>
                    <b-icon icon="check" class="colorBlue"></b-icon> 
                    Technology for discovering causative factors through Mendelian randomization analysis
                  </li>
                </ul>                
            </b-card-text>
        </b-card>

    </div><!--container-->
  </div><!--content-->
</template>
<script>
export default {
  methods:{ 
      goback(){
          this.$router.go(-1);//     
      } 
  }
};
</script>