$('#add_user').submit(()=>{
    alert("Data Inserted Successfully!")
})

$('#update_user').submit((event)=>{
    event.preventDefault();

    let unindexed_array = $("#update_user").serializeArray();
    let data = {}
    console.log('I am unIndexed!:',unindexed_array)
    $.map(unindexed_array, (n,i) => {
        data[n['name']] = n['value']
    })

    let request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }
    console.log('Data:' ,data)
    $.ajax(request).done((response)=>{
        alert("Data Updated Successfully!") 
        console.log(request)  
    })
    location.href = '/'
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    console.log('testing', $ondelete.attr('data-id'))
    $ondelete.click(() => {
        let id = $ondelete.attr("data-id")
        console.log('this', this)
        let request = {
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE",
        }

        if(confirm("Are you sure you want to delete this entry?")){
            $.ajax(request).done((response)=>{
                alert("Data Deleted Successfully!"); 
                location.reload()
            }) 
        }
    })
}