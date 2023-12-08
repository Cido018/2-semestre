var data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'] , 

    datasets: [{
        label: "Vendas Mensais",
        backgroundColor: "rbga(76, 193, 192, 0.6)" ,
        borderColor : "rgba (144, 192, 150, 1)",
        borderWidth: 2,
        data: [12, 19, 20, 5, 2, 5, 7, 15, 12, 4, 11, 21]
    },{
    label: "Vendas Mensais",
    backgroundColor: "rbga(76, 193, 192, 0.6)" ,
    borderColor : "rgba (144, 192, 150, 1)",
    borderWidth: 2,
    data: [12, 19, 20, 5, 2, 5, 7, 15, 12, 4, 11, 21]
},{
    label: "Vendas Mensais",
    backgroundColor: "rbga(76, 193, 192, 0.6)" ,
    borderColor : "rgba (144, 192, 150, 1)",
    borderWidth: 2,
    data: [12, 19, 20, 5, 2, 5, 7, 16, 18, 5, 13, 23]
}, 
{    label: "Vendas Mensais",
    backgroundColor: "rbga(76, 193, 192, 0.6)" ,
    borderColor : "rgba (144, 192, 150, 1)",
    borderWidth: 2,
    data: [6, 7, 8, 9, 10, 1, 11, 17, 19, 5, 12, 22]
}
]

};

var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options
});
