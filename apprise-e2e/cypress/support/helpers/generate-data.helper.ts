import { dateTimeHelper } from './date-time.helper';

const { _ } = Cypress;
class GenerateData {
    getRandomTimeStamp(): string {
        return String(dateTimeHelper.getTimeStamp() + _.random(1, 100));
    }

    getEmail(): string {
        return this.getRandomTimeStamp().concat('@yopmail.com');
    }

    getEmailWithPrefix(prefix: string) {
        if (prefix) {
            return prefix.concat(this.getEmail());
        }
    }

    getOrganizationName(): string {
        return 'Automation_'.concat(this.getRandomTimeStamp());
    }

    getOrganizationType(): string {
        return 'Type_'.concat(this.getRandomTimeStamp());
    }

    getRandomItemInArray(data: any) {
        return data[Math.floor(Math.random() * data.length)];
    }

    getTextWithPrefix(prefix: string): string {
        if (prefix) {
            return prefix.concat(this.getRandomTimeStamp());
        }
    }

    generateRandomCharacters(numberOfCharacter: number) {
        let result = '';
        const characters = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < numberOfCharacter; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
}
export const generateData = new GenerateData();
