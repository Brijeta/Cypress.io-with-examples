// Import the necessary Cypress file upload plugin
import 'cypress-file-upload';

describe('File Upload Scenarios in Cypress', () => {

  // Test 1: Single File Upload using Click
  it('Single File Upload using the Upload Button', () => {
    // Visit the target website for file upload
    cy.visit("https://the-internet.herokuapp.com/upload");

    // Select the file input and upload the file by specifying its path
    cy.get("#file-upload").attachFile("BrijetaGhevraiya.docx");

    // Click the Submit button to upload the file
    cy.get("#file-submit").click();

    // Validate that the file was successfully uploaded
    cy.get(".example > h3").should('have.text', 'File Uploaded!');
  });

  // Test 2: File Upload with Renaming
  it('File Upload with Renaming the Uploaded File', () => {
    // Visit the target website for file upload
    cy.visit("https://the-internet.herokuapp.com/upload");

    // Attach the file with a custom name (`data.docx`)
    cy.get('#file-upload').attachFile({ filePath: 'BrijetaGhevraiya.docx', fileName: 'data.docx' });

    // Click the Submit button to upload the file
    cy.get('#file-submit').click();

    // Validate that the file was successfully uploaded
    cy.get(".example > h3").should('have.text', 'File Uploaded!');
  });

  // Test 3: Drag and Drop File Upload
  it('File Upload using Drag and Drop', () => {
    // Visit the target website for drag and drop file upload
    cy.visit("https://the-internet.herokuapp.com/upload");

    // Attach the file using drag-and-drop option
    cy.get('#drag-drop-upload').attachFile("BrijetaGhevraiya.docx", { subjectType: 'drag-n-drop' });

    // Validate that the file name is correctly displayed after the drag-and-drop operation
    cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span")
      .should('have.text', 'BrijetaGhevraiya.docx');
  });

  // Test 4: Multiple Files Upload
  it('Upload Multiple Files', () => {
    // Visit the target website for multiple file upload
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    // Attach multiple files at once by specifying their paths in an array
    cy.get('#filesToUpload').attachFile(["BrijetaGhevraiya.docx", "data.docx"]);

    // Wait for the upload operation to complete
    cy.wait(3000);

    // Validate that the text changes to indicate multiple files were selected
    cy.get("div > p >strong:last-child").should('have.text', 'Files You Selected:');
  });

  // Test 5: File Upload within Shadow DOM
  it('File Upload in a Shadow DOM Context', () => {
    // Visit the target website that contains a file upload input inside a Shadow DOM
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");

    // Attach the file to the input inside the Shadow DOM
    cy.get(".smart-browse-input", { includeShadowDom: true }).attachFile("BrijetaGhevraiya.docx");

    // Validate that the file name appears correctly within the Shadow DOM context
    cy.get(".smart-item-name", { includeShadowDom: true })
      .contains('BrijetaGhevraiya.docx');
  });

});
