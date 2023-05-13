import type {Employee} from '@prisma/client'
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export class EmployeeService {
    /**
     * Gets all employees from the database
     *
     * @returns {Employee[]} An array of all employees
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    async getAllEmployees() {
        return prisma.employee.findMany();
    }

    /**
     * Gets an employee by ID
     *
     * @returns {Employee} An employee object
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    async getEmployeeById(id: number) {
        return prisma.employee.findFirst({
            where: {id: id}
        })
    }

    /**
     * Creates an employee in the database
     *
     * @returns Created employee object
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    async createEmployee(employee: Employee) {
        return prisma.employee.create({
            data: employee
        })
    }

    async updateEmployee(id: number, employee: Employee) {
        return prisma.employee.update({
            where: {id: id},
            data: employee
        })
    }

    /**
     * Deletes an employee by ID from the database
     *
     * @returns {string} A string indicating the employee was deleted
     *
     * @author Pavan Kumar Jadda
     * @since 1.0.0
     */
    async deleteEmployee(id: number) {
        return prisma.employee.delete({
            where: {id: id}
        })
    }
}
