describe("Customer test suite",()=>{
    it("verify getName() method",()=>{
     const customer= new Customer("Ram","abc@gmail.com",9853502965,12-12-2000);
     expect(customer.getName()).toBe("Ram");
    });
    it("verify getEmail() method",()=>{
        const customer= new Customer("Ram","abc@gmail.com",9853502965,12-12-2000);
     expect(customer.getEmail()).toBe("abc@gmail.com");   
    });
});