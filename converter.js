const converter=()=>{
    var in_val=document.querySelector("#in_val").value;
    var in_unit=document.querySelector("#in_unit").value;
    var out_val=document.querySelector("#out_val");
    var out_unit=document.querySelector("#out_unit").value;
    //meter and centimeter
    if(in_unit=="meter"&& out_unit=="centimeter"){
        //multiply by 100
        let output_val=in_val*100;
        out_val.value=output_val;
    }
    //centimeter and meter
    else if(in_unit=="centimeter"&& out_unit=="meter"){
        //division by 100
        let output_val=in_val/100;
        out_val.value=output_val;
    }
    //kilometer and meter
    else if(in_unit=="kilometer"&& out_unit=="meter"){
        //multiply by 1000
        let output_val=in_val*1000;
        out_val.value=output_val;
        
    }
    //meter and kilometer
    else if(in_unit=="meter"&& out_unit=="kilometer"){
        //division by 1000
        let output_val=in_val/1000;
        out_val.value=output_val;
        
    }
     //kilometer and centimeter
     else if(in_unit=="kilometer"&& out_unit=="centimeter"){
        //multiply by 100000
        let output_val=in_val*100000;
        out_val.value=output_val;
        
    }
    //centimeter and kilometer
    else if(in_unit=="centimeter"&& out_unit=="kilometer"){
        //division by 100000
        let output_val=in_val/100000;
        out_val.value=output_val;
        
    }
    //kilometer and millimeter
    else if(in_unit=="kilometer"&& out_unit=="millimeter"){
        //multiply by 1000000
        let output_val=in_val*1000000;
        out_val.value=output_val;
        
    }
     //millimeter and kilometer
     else if(in_unit=="millimeter"&& out_unit=="kilometer"){
        //division by 1000000
        let output_val=in_val/1000000;
        out_val.value=output_val;
        
    }
    //kilometer and micrometer
    else if(in_unit=="kilometer"&& out_unit=="micrometer"){
        //multiply by 1000000000
        let output_val=in_val*1000000000;
        out_val.value=output_val;
        
    }
    //micrometer and kilometer
    else if(in_unit=="micrometer"&& out_unit=="kilometer"){
        //multiply by 1000000000
        let output_val=in_val/1000000000;
        out_val.value=output_val;
        
    }
    //kilometer and nanometer
    else if(in_unit=="kilometer"&& out_unit=="nanometer"){
        //multiply by 1000000000000
        let output_val=in_val*1000000000000;
        out_val.value=output_val;
        
    }
    //nanometer and kilometer
    else if(in_unit=="nanometer"&& out_unit=="kilometer"){
        //division by 1000000000000
        let output_val=in_val/1000000000000;
        out_val.value=output_val;
        
    }
    //kilometer and feet
    else if(in_unit=="kilometer"&& out_unit=="feet"){
        //multiply by 3280.84
        let output_val=in_val*3280.84;
        out_val.value=output_val;
        
    }
    //feet and kilometer
    else if(in_unit=="feet"&& out_unit=="kilometer"){
        //division by 3280.84
        let output_val=in_val/3280.84;
        out_val.value=output_val;
        
    }
    //kilometer and inch
    else if(in_unit=="kilometer"&& out_unit=="inch"){
        //multiply by 39370.08
        let output_val=in_val*39370.08;
        out_val.value=output_val;
        
    }
    //feet and kilometer
    else if(in_unit=="inch"&& out_unit=="kilometer"){
        //division by 39370.08
        let output_val=in_val/3280.84;
        out_val.value=output_val;
        
    }
    //meter and millimeter
    else if(in_unit=="meter"&& out_unit=="millimeter"){
        //multiply by 1000
        let output_val=in_val*1000;
        out_val.value=output_val;
        
    }
    //millimeter and meter
    else if(in_unit=="millimeter"&& out_unit=="meter"){
        //division by 1000
        let output_val=in_val/1000;
        out_val.value=output_val;
        
    }
    //meter and micrometer
    else if(in_unit=="meter"&& out_unit=="micrometer"){
        //multiply by 1000000
        let output_val=in_val*1000000;
        out_val.value=output_val;
        
    }
    //micrometer and meter
    else if(in_unit=="micrometer"&& out_unit=="meter"){
        //division by 1000000
        let output_val=in_val/1000000;
        out_val.value=output_val;
        
    }
    //meter and nanometer
    else if(in_unit=="meter"&& out_unit=="nanometer"){
        //multiply by 1000000000
        let output_val=in_val*1000000000;
        out_val.value=output_val;
        
    }
    //nanometer and meter
    else if(in_unit=="nanometer"&& out_unit=="meter"){
        //division by 1000000000
        let output_val=in_val/1000000000;
        out_val.value=output_val;
        
    }
    //meter and feet
    else if(in_unit=="meter"&& out_unit=="feet"){
        //multiply by 3.28084
        let output_val=in_val*3.28084;
        out_val.value=output_val;
        
    }
    //feet and meter
    else if(in_unit=="feet"&& out_unit=="meter"){
        //division by 3.28084
        let output_val=in_val/3.28084;
        out_val.value=output_val;
        
    }
    //meter and inch
    else if(in_unit=="meter"&& out_unit=="inch"){
        //multiply by 39.37008
        let output_val=in_val*39.37008;
        out_val.value=output_val;
        
    }
    //inch and meter
    else if(in_unit=="inch"&& out_unit=="meter"){
        //division by 39.37008
        let output_val=in_val/39.37008;
        out_val.value=output_val;
        
    }
    //centimeter and millimeter
    else if(in_unit=="centimeter"&& out_unit=="millimeter"){
        //multiply by 0.1
        let output_val=in_val*0.1;
        out_val.value=output_val;
    }
    //millimeter and centimeter
    else if(in_unit=="millimeter"&& out_unit=="centimeter"){
        //divided by 0.1
        let output_val=in_val/0.1;
        out_val.value=output_val;
    }
    //centimeter and micrometer
    else if(in_unit=="centimeter"&& out_unit=="micrometer"){
        //multiply by 10000
        let output_val=in_val*10000;
        out_val.value=output_val;
    }
    //micrometer and centimeter
    else if(in_unit=="micrometer"&& out_unit=="centimeter"){
        //divided by 10000
        let output_val=in_val/10000;
        out_val.value=output_val;
    }

    //centimeter and nanometer
    else if(in_unit=="centimeter"&& out_unit=="nanometer"){
        //multiply by 10000000
        let output_val=in_val*10000000;
        out_val.value=output_val;
    }
    //nanometer and centimeter
    else if(in_unit=="nanometer"&& out_unit=="centimeter"){
        //divided by 10000000
        let output_val=in_val/10000000;
        out_val.value=output_val;
    }

    //centimeter and feet
    else if(in_unit=="centimeter"&& out_unit=="feet"){
        //multiply by 0.0328084
        let output_val=in_val*0.0328084;
        out_val.value=output_val;
    }
    //feet and centimeter
    else if(in_unit=="feet"&& out_unit=="centimeter"){
        //divided by 0.0328084
        let output_val=in_val/0.0328084;
        out_val.value=output_val;
    }

    //centimeter and inch
    else if(in_unit=="centimeter"&& out_unit=="inch"){
        //multiply by 0.3937008
        let output_val=in_val*0.3937008;
        out_val.value=output_val;
    }
    //inch and centimeter
    else if(in_unit=="inch"&& out_unit=="centimeter"){
        //divided by 0.3937008
        let output_val=in_val/0.3937008;
        out_val.value=output_val;
    }

    // millimeter and micrometer
    else if(in_unit=="millimeter"&& out_unit=="micrometer"){
        //multiply by 1000
        let output_val=in_val*1000;
        out_val.value=output_val;
    }
    //micrometer and millimeter
    else if(in_unit=="micrometer"&& out_unit=="millimeter"){
        //divided by 1000
        let output_val=in_val/1000;
        out_val.value=output_val;
    }
    // millimeter and nanometer
    else if(in_unit=="millimeter"&& out_unit=="nanometer"){
        //multiply by 1000000
        let output_val=in_val*1000000;
        out_val.value=output_val;
    }
    //nanometer and millimeter
    else if(in_unit=="nanometer"&& out_unit=="millimeter"){
        //divided by 1000000
        let output_val=in_val/1000000;
        out_val.value=output_val;
    }

    // millimeter and feet
    else if(in_unit=="millimeter"&& out_unit=="feet"){
        //multiply by 0.00328084
        let output_val=in_val*0.00328084;
        out_val.value=output_val;
    }
    //feet and millimeter
    else if(in_unit=="feet"&& out_unit=="millimeter"){
        //divided by 0.00328084
        let output_val=in_val/0.00328084;
        out_val.value=output_val;
    }

     // millimeter and inch
     else if(in_unit=="millimeter"&& out_unit=="inch"){
        //multiply by 0.03937008
        let output_val=in_val*0.03937008;
        out_val.value=output_val;
    }
    //inch and millimeter
    else if(in_unit=="inch"&& out_unit=="millimeter"){
        //divided by 0.03937008
        let output_val=in_val/0.03937008;
        out_val.value=output_val;
    }

    // micrometer and nanometer
    else if(in_unit=="micrometer"&& out_unit=="nanometer"){
        //multiply by 1000
        let output_val=in_val*1000;
        out_val.value=output_val;
    }
    //nanometer and micrometer
    else if(in_unit=="nanometer"&& out_unit=="micrometer"){
        //divided by 1000
        let output_val=in_val/1000;
        out_val.value=output_val;
    }
    // micrometer and feet
    else if(in_unit=="micrometer"&& out_unit=="feet"){
        //multiply by 3.28084e-6
        let output_val=in_val*3.28084e-6;
        out_val.value=output_val;
    }
    //feet and micrometer
    else if(in_unit=="feet"&& out_unit=="micrometer"){
        //divided by 3.28084e-6
        let output_val=in_val/3.28084e-6;
        out_val.value=output_val;
    }
    // micrometer and inch
    else if(in_unit=="micrometer"&& out_unit=="inch"){
        //multiply by 3.937008e-5
        let output_val=in_val*3.937008e-5;
        out_val.value=output_val;
    }
    //inch and micrometer
    else if(in_unit=="inch"&& out_unit=="micrometer"){
        //divided by 3.937008e-5
        let output_val=in_val/3.937008e-5;
        out_val.value=output_val;
    }

     // nanometer and feet
     else if(in_unit=="nanometer"&& out_unit=="feet"){
        //multiply by 3.28084e-9
        let output_val=in_val*3.28084e-9;
        out_val.value=output_val;
    }
    //feet and nanometer
    else if(in_unit=="feet"&& out_unit=="nanometer"){
        //divided by 3.28084e-9
        let output_val=in_val/3.28084e-9;
        out_val.value=output_val;
    }
    // nanometer and inch
    else if(in_unit=="nanometer"&& out_unit=="inch"){
        //multiply by 3.937008e-8
        let output_val=in_val*3.937008e-8;
        out_val.value=output_val;
    }
    //inch and nanometer
    else if(in_unit=="inch"&& out_unit=="nanometer"){
        //divided by 3.937008e-8
        let output_val=in_val/3.937008e-8;
        out_val.value=output_val;
    }

    // nanometer and inch
    else if(in_unit=="nanometer"&& out_unit=="inch"){
        //multiply by 3.937008e-8
        let output_val=in_val*3.937008e-8;
        out_val.value=output_val;
    }
    //inch and nanometer
    else if(in_unit=="inch"&& out_unit=="nanometer"){
        //divided by 3.937008e-8
        let output_val=in_val/3.937008e-8;
        out_val.value=output_val;
    }
    // feet and inch
    else if(in_unit=="feet"&& out_unit=="inch"){
        //multiply by 12
        let output_val=in_val*12;
        out_val.value=output_val;
    }
    //inch and feet
    else if(in_unit=="inch"&& out_unit=="feet"){
        //divided by 12
        let output_val=in_val/12;
        out_val.value=output_val;
    }
    





    












    





    


}