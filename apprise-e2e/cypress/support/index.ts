import chaiSorted from 'chai-sorted';
import 'cypress-downloadfile/lib/downloadFileCommand';
import 'cypress-file-upload';
import 'cypress-real-events/support';
import 'cypress-should-really';
import 'cypress-xpath';
import './commands/actions.command';
import './commands/api-response.command';
import './commands/asserts.command';
import './commands/ddl.command';
import './commands/elements.command';
import './commands/message.command';
import './commands/modal.command';
import './commands/search.command';
import './commands/table.command';

chai.use(chaiSorted);
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
