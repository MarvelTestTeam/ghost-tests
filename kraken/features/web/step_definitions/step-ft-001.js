const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {

    let element = await this.driver.$('#ember7');

    return await element.setValue(email);

});

When('I enter password {kraken-string}', async function (password) {

    let element = await this.driver.$('#ember9');

    return await element.setValue(password);

});

When('I click next', async function() {

    let element = await this.driver.$('#ember11');

    return await element.click();

});

// PR-001

Then('I click on post general menu pr001', async function () {

    

    let element = await this.driver.$('//a[@href="#/posts/"]');

    return await element.click();

});

Then('I click on new post button pr001', async function () {

    let element = await this.driver.$('//section[@class="view-actions"]/a[@href="#/editor/post/"]/span[.="New post"]');

    return await element.click();

});

Then('I click on the redact post inputbox', async function () {

    
    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div');

    return await element.click();

  });

Then('I click on the publish post inputbox', async function () {

    
    let element = await this.driver.$('//div[@class="flex flex-row"]/section//section[@class="flex"]/div[2]/div[@role="button"]/span');

    return await element.click();

  });

  
Then('I click on the live publish post inputbox', async function () {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Publish"]');

    return await element.click();

  });

Then('I click on the final publish post inputbox', async function () {

    
    let element = await this.driver.$('//div[@class="epm-modal-container"]/div//div[@class="modal-footer"]/button[2]/span[.="Publish"]');

    return await element.click();

  });

  Then('I click on posts button pr001', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//a[@href="#/posts/"]/span'); 

    return await element.click(); 

  });

Then('I click on verify posting', async function () {

    let element = await this.driver.$('//a[@href="#/posts/"]');
    
    return await element.click(); 
})

// PR-002


Then('I click on post menu pr002', async function () {

    let element = await this.driver.$('//a[@href="#/posts/"]');

    return await element.click();

});

Then('I click on new post button pr002', async function () {

    let element = await this.driver.$('//section[@class="view-actions"]/a[@href="#/editor/post/"]/span[.="New post"]');

    return await element.click();

});

Then('I click on redact post inputbox', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div');

    return await element.click();

  });



  Then('I click on posts button pr002', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//a[@href="#/posts/"]/span'); 

    return await element.click(); 

  });

Then('I click on verify draft posting', async function () {

    let element = await this.driver.$('//a[@title="Drafts"]/span[@class="gh-nav-viewname"]');
    
    return await element.click(); 
})


// PR-003



Then('I click on published post menu pr003', async function () {

    //div[@class='gh-app']/div/nav[1]//section[@class='gh-nav-body']//ul[@class='gh-nav-list gh-nav-manage']/li[@class='gh-nav-list-new relative']/div/div/ul[@class='gh-nav-view-list']//a[@title='Published']/span[@class='gh-nav-viewname']
    let element = await this.driver.$('//ul[@class="gh-nav-list gh-nav-manage"]/li[@class="gh-nav-list-new relative"]/div/div/ul[@class="gh-nav-view-list"]//a[@title="Published"]/span[@class="gh-nav-viewname"]');

    return await element.click();

});

Then('I click post to edit pr003', async function () {


    let element = await this.driver.$('.posts-list > :nth-child(6)');

    return await element.click();

});

When('I click on body text area pr003', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div/p');

    return await element.click();

});

Then('I enter post body pr003 {kraken-string}', async function (postBody) {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div/p');

    return await element.setValue(postBody);

});

Then('I click on update button pr003', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//section[@class="flex"]/div[1]/div[@role="button"]/span');

    return await element.click();

});

Then('I click on update final buttom pr003', async function () {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Update"]');

    return await element.click();

});



Then('I click on posts button pr003', async function () {

    let element = await this.driver.$('//a[@href="#/posts/?type=published"]/span');

    return await element.click();

});

// PR-004

Then('I click on published post menu pr004', async function () {

    //div[@class='gh-app']/div/nav[1]//section[@class='gh-nav-body']//ul[@class='gh-nav-list gh-nav-manage']/li[@class='gh-nav-list-new relative']/div/div/ul[@class='gh-nav-view-list']//a[@title='Published']/span[@class='gh-nav-viewname']
    let element = await this.driver.$('//ul[@class="gh-nav-list gh-nav-manage"]/li[@class="gh-nav-list-new relative"]/div/div/ul[@class="gh-nav-view-list"]//a[@title="Published"]/span[@class="gh-nav-viewname"]');

    return await element.click();

});

Then('I click post to edit pr004', async function () {


    let element = await this.driver.$('.posts-list > :nth-child(5)');

    return await element.click();

});

Then('I click lateral edition barr pr004', async function () {


    let element = await this.driver.$('body > div.gh-app > div > main > button > span > svg');

    return await element.click();

});

Then('I click on delete link pr004', async function () {


    let element = await this.driver.$('//div[@id="entry-controls"]//form/button[@type="button"]/span');

    return await element.click();

});

Then('I click on delete confirmation pr004', async function () {


    let element = await this.driver.$('//div[@class="modal-footer"]/button[2]/span[.="Delete"]');

    return await element.click();

});


// PR-005

Then('I click on post general menu pr005', async function () {

    let element = await this.driver.$('//a[@href="#/posts/"]');

    return await element.click();

});

Then('I click on new post button pr005', async function () {

    let element = await this.driver.$('//section[@class="view-actions"]/a[@href="#/editor/post/"]/span[.="New post"]');

    return await element.click();

});

Then('I click on the redact post inputbox pr005', async function () {

    
    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div');

    return await element.click();

  });

Then('I click on the publish post inputbox pr005', async function () {

    let element = await this.driver.$('//section[@class="flex"]/div[2]/div[@role="button"]/span');

    return await element.click();

  });

Then('I click on the live publish post inputbox pr005', async function () {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Publish"]');

    return await element.click();

  });

Then('I click on the final publish post inputbox pr005', async function () {

    let element = await this.driver.$('//div[@class="modal-footer"]/button[2]/span[.="Publish"]');

    return await element.click();

  });

  Then('I click on posts button pr005', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//a[@href="#/posts/"]/span'); 

    return await element.click(); 

  });

Then('I click on verify posting pr005', async function () {

    let element = await this.driver.$('//a[@href="#/posts/"]');
    
    return await element.click(); 
})


///----------------Jose-------------
When('I click a new post.', async function() {

    let element = await this.driver.$('//a[@title="New post"]/span');

    return await element.click();

});

When('I enter text in post', async function() {

    let element = await this.driver.$('//textarea[@placeholder="Post title"]');

    return await element.setValue("Titulo post de prueba");

});

When('I click in doom', async function() {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section/div[1]/div[1]');

    return await element.click();

});
When('I click in publish post', async function() {

    let element = await this.driver.$('//section[@class="flex"]/div[2]/div[@role="button"]/span');

    return await element.click();

});


When('I click in publish post2', async function() {

    let element = await this.driver.$('//section/div/div[2]/div[@class="gh-publishmenu-radio-button"]');

    return await element.click();

});

When('I click in publish schedule', async function() {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Schedule"]');

    return await element.click();

});

When('I click in publish schedule2', async function() {

    let element = await this.driver.$('//div[@class="epm-modal-container"]/div//div[@class="modal-footer"]/button[2]/span[.="Schedule"]');

    return await element.click();

});

When('I clear text', async function() {

    let element = await this.driver.$('//textarea[@placeholder="Post title"]');

    return await element.setValue('')

});

When('I click in publish post3', async function() {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Publish"]');

    return await element.click();
});

When('I click in publish post4', async function() {

    let element = await this.driver.$('/html//div[@class="epm-modal-container"]/div//div[@class="modal-footer"]/button[2]/span[.="Publish"]');

    return await element.click();
});

When('I select post', async function() {

    let element = await this.driver.$('//section[@class="gh-canvas"]/section/ol/li[2]/a[1]/h3[@class="gh-content-entry-title"]');

    return await element.click();
});

When('I clear title', async function() {

    let element = await this.driver.$('//textarea[@placeholder="Post title"]');

    return await element.setValue("");

});

When('I click in update', async function() {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//section[@class="flex"]/div[1]/div[@role="button"]/span');

    return await element.click();
});

When('I click in update2', async function() {

    let element = await this.driver.$('//div[@id="ember-basic-dropdown-wormhole"]/div/footer/button[2]/span[.="Update"]');

    return await element.click();
});

When('I click in tag', async function() {

    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();
});

When('I click in new tag', async function() {

    let element = await this.driver.$('//section[@class="view-actions"]/a[@href="#/tags/new/"]/span[.="New tag"]');

    return await element.click();
});

When('I set name tag', async function() {

    let element = await this.driver.$('//input[@id="tag-name"]');

    return await element.setValue("Tag2");

});

When('I click save tag', async function() {

    let element = await this.driver.$('//section[@class="view-actions"]/button[@type="button"]/span[.="Save"]');

    return await element.click();

});

When('I set color tag', async function() {

    let element = await this.driver.$('//div[@class="gh-tag-settings-multiprop"]/div[2]/div/input[@name="accent-color"]');

    return await element.setValue("FF5733");

});

When('I confirm leave', async function() {

    let element = await this.driver.$('//body/div[6]/div/div/div[@class="ember-view"]/div[@class="fullscreen-modal-container liquid-wormhole-element"]//section//span[.="Leave"]');

    return await element.click();

});

// PR-011


When('I click on tags menu pr011', async function () {

    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();

});

Then('I click on create a new tag pr011', async function () {

    let element = await this.driver.$('//section[@class="view-actions"]/a[@href="#/tags/new/"]/span[.="New tag"]');

    return await element.click();

});

When('I enter wrong color code pr011 {kraken-string}', async function (colorCode) {
    
    let element = await this.driver.$('//div[@class="gh-tag-settings-multiprop"]/div[2]/div/input[@name="accent-color"]');

    return await element.setValue(colorCode);

});

// PR-012


When('I click on tags menu pr012', async function () {

    
    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();

});

Then('I click on edit tag pr012', async function () {

    let element = await this.driver.$('//a[1]/h3[@class="gh-tag-list-name"]');

    return await element.click();

});

When('I change the name property pr012 {kraken-string}', async function (tagName) {

    let element = await this.driver.$('#tag-name');

    return await element.setValue(tagName);

});

Then('I click on save button pr012', async function () {

    
    let element = await this.driver.$('//section[@class="view-actions"]/button[@type="button"]/span[.="Save"]');

    return await element.click();

});


// PR-013


When('I click on tags menu pr013', async function () {

    
    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();

});

Then('I click on edit tag pr013', async function () {

  
    let element = await this.driver.$('//section[@class="gh-canvas"]/section/ol/li[2]/a[1]/h3[@class="gh-tag-list-name"]');

    return await element.click();

});

When('I change the name property pr013', async function () {

    let element = await this.driver.$('#tag-name');

    return await element.setValue('');

});

Then('I click on save button pr013', async function () {

    let element = await this.driver.$('//section[@class="view-actions"]/button[@type="button"]/span[.="Save"]');

    return await element.click();

});

// PR-014



Then('I click on leave button pr014', async function () {


    let element = await this.driver.$('//section//span[.="Leave"]');

    return await element.click();

});

When('I click on tags menu pr014', async function () {

    
    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();

});

Then('I click on edit tag pr014', async function () {

    
    let element = await this.driver.$('//section[@class="gh-canvas"]/section/ol/li[2]/a[1]/h3[@class="gh-tag-list-name"]');

    return await element.click();

});

When('I enter wrong color code pr014 {kraken-string}', async function (colorCode) {

    let element = await this.driver.$('//div[@class="gh-tag-settings-multiprop"]/div[2]/div/input[@name="accent-color"]');

    return await element.setValue(colorCode);

});

Then('I click on save button pr014', async function () {

    
    let element = await this.driver.$('//section[@class="view-actions"]/button[@type="button"]/span[.="Save"]');

    return await element.click();

});


// PR-015

When('I click on tags menu pr015', async function () {

    
    let element = await this.driver.$('//section[@class="gh-nav-body"]//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/tags/"]');

    return await element.click();

});

Then('I click on edit tag pr015', async function () {

    
    let element = await this.driver.$('//section[@class="gh-canvas"]/section/ol/li[2]/a[1]/h3[@class="gh-tag-list-name"]');

    return await element.click();

});


Then('I click on delete button pr015', async function () {


    let element = await this.driver.$('//section[@class="gh-canvas"]/div/button[@type="button"]/span[.="Delete tag"]');

    return await element.click();

});





Then('I click on confirm delete button pr015', async function () {


    let element = await this.driver.$('//section//span[.="Delete"]');

    return await element.click();

});

// PR-016: Login de usuario en el sistema - Crear Page en estado Publicado - Validar que aparezca con el estado publicado en el listado de Pages

When('I click a new page', async function() {

    let element = await this.driver.$('//a[@href="#/editor/page/"]/span[.="New page"]');

    return await element.click();

});


When('I enter title new page {kraken-string}', async function (tituloNuevoPage) {

    let element = await this.driver.$('//textarea[@placeholder="Page title"]');

    return await element.setValue(tituloNuevoPage);

});

When('I enter description new page {kraken-string}', async function (descripcionNuevoPage) {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div');

    return await element.setValue(descripcionNuevoPage);

});


When('I click on publish menu publish page', async function () {
    
    let element = await this.driver.$('//section[@class="flex"]/div[2]/div[@role="button"]/span');

    return await element.click();

});


When('I clic on publish button page', async function () {

    let element = await this.driver.$('//div/footer/button[2]/span[.="Publish"]');

    return await element.click();

});


When('I visit list pages', async function () {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//a[@href="#/pages/"]/span');

    return await element.click();

});


// PR-017: Login de usuario en el sistema - Crear Page en estado Programado - Validar que aparezca con el estado programado en el listado de Pages

When('I click a new page programmed', async function() {

    let element = await this.driver.$('//a[@href="#/editor/page/"]/span[.="New page"]');

    return await element.click();

});


When('I enter title new page programmed {kraken-string}', async function (tituloNuevoPostProgrammed) {

    let element = await this.driver.$('//textarea[@placeholder="Page title"]');

    return await element.setValue(tituloNuevoPostProgrammed);

});

When('I enter descripcion new page  Programmed {kraken-string}', async function (descripcionNuevoPostProgrammed) {

    let element = await this.driver.$('//div[@class="flex flex-row"]/section//article/div[@class="koenig-editor__editor-wrapper"]/div');

    return await element.setValue(descripcionNuevoPostProgrammed);

});


When('I click on publish menu publish page programmed', async function () {
    
    let element = await this.driver.$('//section[@class="flex"]/div[2]/div[@role="button"]/span');

    return await element.click();

});

When('I click on radiobutton publish page programmed', async function () {
    
    let element = await this.driver.$('//section/div/div[2]/div[@class="gh-publishmenu-radio-button"]');

    return await element.click();

});

When('I enter Schedule it from later page programmed {kraken-string}', async function (fechaProgramada) {

    let element = await this.driver.$('//input[@placeholder="YYYY-MM-DD"]');

    return await element.setValue(fechaProgramada);

});

When('I click on publish button page programmed', async function () {

    let element = await this.driver.$('//div/footer/button[2]/span[.="Schedule"]');

    return await element.click();

});


// PR-018: Login de usuario en el sistema - Eliminar Page en estado Publicado - Validar que NO aparezca en el listado de Pages


When('I click a page to delete', async function() {

    let element = await this.driver.$('//section/ol/li[2]/a[1]/h3[@class="gh-content-entry-title"]');

    return await element.click();
});


When('I click a settings', async function() {

    let element = await this.driver.$('//button[@title="Settings"]/span');

    return await element.click();
});


When('I click a button to delete', async function() {

    let element = await this.driver.$('//div[@id="entry-controls"]//form/button[@type="button"]/span');

    return await element.click();
});



When('I click a button to delete confirm', async function() {

    let element = await this.driver.$('//div[@class="modal-footer"]/button[2]/span[.="Delete"]');

    return await element.click();
});


// PR-019: Login de usuario en el sistema - Intentar Invitar Staff sin correo electrónico - Validar que el sistema genere error.

When('I click on Members', async function () {

    let element = await this.driver.$('//ul[@class="gh-nav-list gh-nav-manage"]//a[@href="#/members/"]');

    return await element.click();

});


When('I click on button new member', async function () {

    let element = await this.driver.$('//a[@href="#/members/new/"]/span[.="New member"]');

    return await element.click();

});


When('I enter name a new member {kraken-string}', async function (nombreStaff) {

    let element = await this.driver.$('//input[@id="member-name"]');

    return await element.setValue(nombreStaff);

});


When('I click a button to save member', async function() {

    let element = await this.driver.$('//section[@class="view-actions"]/button[@type="button"]/span[.="Save"]');

    return await element.click();
});



When('I click a button leave confirm', async function() {

    let element = await this.driver.$('//div[@class="fullscreen-modal-container liquid-wormhole-element"]//section//span[.="Leave"]');

    return await element.click();
});


// PR-020: Login de usuario en el sistema - Intentar Invitar Staff con correo electrónico erroneo - Validar que el sistema genere error de correo erroneo.


When('I enter email a new member {kraken-string}', async function (correo) {

    let element = await this.driver.$('//input[@id="member-email"]');

    return await element.setValue(correo);

});