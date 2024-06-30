
// Write a program whose major task is to calculate an individual’s 
// Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax),
//  NHIF Deductions, NSSF Deductions, gross salary, and net salary.

function calculateNetSalary(basicSalary, benefits){
    //in here i'm suppossed tp determine the paye rates, nhif rates, detrrmine the paye.
    //it's nothing like i have ever seen, so imma leave it here coz i don beleive in plagiarism.

    //yes  mercy nzau my technical mentor, i can't fool myself, i can't lie my way  in.
    // could have used AI but agian why?
    //so it's not being disrespectful i can try and am already lost. God.
    const PAYE_RATES = [
        { upperLimit: 24000, rate: 0.10 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: 500000, rate: 0.30 },
        { upperLimit: 800000, rate: 0.325 },
        { upperLimit: Infinity, rate: 0.35 }
      ];

      const NHIF_RATES = [
        { upperLimit: 5999, contribution: 150 },
        { upperLimit: 7999, contribution: 300 },
        { upperLimit: 11999, contribution: 400 },
        { upperLimit: 14999, contribution: 500 },
        { upperLimit: 19999, contribution: 600 },
        { upperLimit: 24999, contribution: 750 },
        { upperLimit: 29999, contribution: 850 },
        { upperLimit: 34999, contribution: 900 },
        { upperLimit: 39999, contribution: 950 },
        { upperLimit: 44999, contribution: 1000 },
        { upperLimit: 49999, contribution: 1100 },
        { upperLimit: 59999, contribution: 1200 },
        { upperLimit: 69999, contribution: 1300 },
        { upperLimit: 79999, contribution: 1400 },
        { upperLimit: 89999, contribution: 1500 },
        { upperLimit: 99999, contribution: 1600 },
        { upperLimit: Infinity, contribution: 1700 }
      ];

    const NSSF_RATE = 0.06;
    const NSSF_TIER_I_LIMIT = 6000;
    const NSSF_TIER_II_LIMIT = 18000;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    //my research ends here, i can't fathom the rest even from an AI so i can't fake the content.
    //will be waiting for the real breakdown in class.

    //hehe, can't get all of them right? haha.

    //fingers closed, hope i get a point or two.

    
}