$(document).ready(function(){
    $('#orderbutton').click(function(){
       let name = $("input[name=username]").val();
       let coffeetype = $('input[name=coffeetype]:checked').val();
       let extras = [];
       $('input[name=extras]:checked').each(function(){
           extras.push($(this).val());
       })

       let total=0;

        //Add coffee type cost
       if(coffeetype == 'turkish'){
           total = total + 3;
       }else if(coffeetype == "american"){
           total  = total + 5;
       }else if(coffeetype == 'iced'){
           total = total + 7;
       }

       //Add extra cost
       for(let i = 0; i<extras.length;i++){
           let extra = extras[i];

           if(extra == "extra_coffee"){
               total = total + 1.5;
           }else if(extra == "whipped_cream"){
               total = total + 2;
           }else if(extra == "extra_caramel"){
            total = total + 3;
           }
       }

       //Print report
       let output = `Name: ${name} <br>`;
       output += `Total: $ ${total.toFixed(2)}`;

        //Add result to div with ID result
       $("#result").html(output);

    });
});