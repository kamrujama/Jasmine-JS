describe('main.js', function() {
    
    describe('calculate()', function() {
        it("should validate first number", function() {
            // will create Virtual copy of function used
            spyOn(window, 'updateResult');
            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Operation Not Recognized");
        })

        it("should validate second number", function() {
            // will create Virtual copy of function used
            spyOn(window, 'updateResult');
            calculate('3+b');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Operation Not Recognized");
        })

        it("should validate Operation", function() {
            // will create Virtual copy of function used
            spyOn(window, 'updateResult');
            calculate('3&3');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Operation Not Recognized");
        })

        it("should validate the constructor add() Method", function() {
            spyOn(Calculator.prototype, 'add');
            calculate('3+4');
            expect(Calculator.prototype.add).toHaveBeenCalled();
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(3);
            expect(Calculator.prototype.add).toHaveBeenCalledWith(4);
        })
        
        it('should validate the constructor subtract() Method', function() {
            spyOn(Calculator.prototype, 'subtract');
            calculate('3-4');
            expect(Calculator.prototype.subtract).toHaveBeenCalled();
            expect(Calculator.prototype.subtract).toHaveBeenCalledTimes(1);
            expect(Calculator.prototype.subtract).toHaveBeenCalledWith(4);

        })

        xit('multiply')
        xit('divide')
    })

    describe('updateResult()', function() {

        beforeAll(function() {
            const element = document.createElement('div');
            element.id = 'result';
            document.body.appendChild(element);
            // we can use this keyword to make any variable available in the test scope
            // but it will work only with normal function not with arrow function
            this.element = element;
        })

        afterAll(function() {
            let element = document.getElementById('result');
            document.body.removeChild(element);
        })

        it("Update the result if valid", function() {
            updateResult('6');
            expect(this.element.innerText).toBe('6');
        })


    })

})