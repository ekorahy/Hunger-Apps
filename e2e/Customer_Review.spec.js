Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add new review', async ({ I }) => {
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  I.click(firstRestaurant);

  I.see('Add New Review', '.add-new-review');
  I.fillField('name', 'Ekorahy e2e Testing');
  I.fillField('review', 'Tempatnya sangat nyaman...');
  I.click('Submit');
});
