function monthlySaving(all_payments, cost) {
    if (Array.isArray(all_payments) || isNaN(cost) != true) {
        let total = 0;
        for (let i = 0; i < all_payments.length; i++) {
            if (all_payments[i] >= 3000) {
                total += all_payments[i] - (all_payments[i] * 0.2);
            }
            else {
                total += all_payments[i];
            }
        }
        let S = total - cost;
        if (S < 0) {
            console.log("earn more");
        }
        else {
            console.log(S);
        }
    }
    else {
        console.log("invalid input");
    }
}

monthlySaving([1000, 2000, 3000], 5400);
monthlySaving([1000, 2000, 2500], 5000);
monthlySaving([900, 2700, 3400], 10000);
monthlySaving(100, [900, 2700, 3400]);