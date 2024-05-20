var para = document.getElementById('para');



    function bold(){
  if( para.style.fontWeight=='800' ){
      para.style.fontWeight='400'
  }else{
    para.style.fontWeight='800'
  }
    }
    
    function italic(){
        if(para.style.fontStyle=='italic'){
            para.style.fontStyle=''
            
        }else{
            para.style.fontStyle='italic'

        }
    }
    
    function under(){
        if(para.style.textDecoration=='underline'){
            para.style.textDecoration=''    
        }else{
            para.style.textDecoration='underline'

        }
    }
    function left(){
        if(para.style.textAlign=='Left'){
            para.style.textAlign=''    
        }else{
            para.style.textAlign='left'

        }
    }
    function right(){
        if(para.style.textAlign=='right'){
            para.style.textAlign=''    
        }else{
            para.style.textAlign='right'
        }
    }

