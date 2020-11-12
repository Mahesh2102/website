$(document).ready(function(){
    var url="https://api.covid19india.org/data.json"
    $.getJSON(url,function(data){
        console.log(data)
        var corona=[]
        $.each(data.statewise,function(id,obj){

            corona.push("<tr>")
            corona.push("<td>"+obj.state+"</td>")
            corona.push("<td>"+obj.confirmed+"</td>")
            corona.push("<td>"+obj.active+"</td>")
            corona.push("<td>"+obj.recovered+"</td>")
            corona.push("<td>"+obj.deaths+"</td>")
            corona.push("</tr>")
            delete corona[1]
            delete corona[2]
            delete corona[3]
            delete corona[4]
            delete corona[5]
            

        })
        $("<tbody/>",{html: corona.join("")}).appendTo("table")
        
        
        var totalconfirm,totalactive,totalrecover,totaldeath
        var state=[]
        var active=[]
        var confirmed=[]
        var recovered=[]
        var deaths=[]
        $.each(data.statewise,function(id,obj){
            state.push(obj.state)
            active.push(obj.active)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
        })

        state.shift()
        active.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        
        console.log(state)
        
        totalactive=data.statewise[0].active
        totalconfirm=data.statewise[0].confirmed
        totalrecover=data.statewise[0].recovered
        totaldeath=data.statewise[0].deaths
        
        $("#active").append(totalactive)
        $("#confirmed").append(totalconfirm)
        $("#recovered").append(totalrecover)
        $("#deaths").append(totaldeath)
        var myChart = document.getElementById("myChart").getContext('2d')

        var chart=new Chart(myChart,{
            type:'bar',
            data:{
                labels:state,
                datasets:[
                    {
                        label:"confirmed cases",
                        data:confirmed,
                        backgroundColor:"#FF8C00",
                    },
                    {
                        label:"Recovered cases",
                        data:recovered,
                        backgroundColor:"#17f704",
                    },
                    {
                        label:"Deaths",
                        data:deaths,
                        backgroundColor:"#8B0000",
                    },
                    {
                        label:"Active cases",
                        data:active,
                        backgroundColor:"#0433f7",
                    }                    
                ]
            },
            options:{}
        })
    })
})
