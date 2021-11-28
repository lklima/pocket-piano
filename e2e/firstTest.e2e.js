describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have initial text', async () => {
    const text = await element(by.text('POCKET PIANO'));

    await expect(text).toBeVisible();
  });

  it('should play note', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const cNote = await element(by.id('C4-note-key'));

    await cNote.longPress(3000);

    const text = element(by.text('POCKET PIANO'));

    await expect(text).toBeVisible();
  });
});
