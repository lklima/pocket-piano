describe('Test Piano', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have initial text', async () => {
    const text = await element(by.text('POCKET PIANO'));

    await expect(text).toBeVisible();
  });

  it('should play note C', async () => {
    const noteKey = await element(by.id('C-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE C'));

    await expect(text).toBeVisible();
  });

  it('should play note D', async () => {
    const noteKey = await element(by.id('D-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE D'));

    await expect(text).toBeVisible();
  });

  it('should play note E', async () => {
    const noteKey = await element(by.id('E-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE E'));

    await expect(text).toBeVisible();
  });

  it('should play note F', async () => {
    const noteKey = await element(by.id('F-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE F'));

    await expect(text).toBeVisible();
  });

  it('should play note G', async () => {
    const noteKey = await element(by.id('G-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE G'));

    await expect(text).toBeVisible();
  });

  it('should play note A', async () => {
    const noteKey = await element(by.id('A-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE A'));

    await expect(text).toBeVisible();
  });

  it('should play note B', async () => {
    const noteKey = await element(by.id('B-note-key'));

    await noteKey.longPress();

    const text = element(by.text('NOTE B'));

    await expect(text).toBeVisible();
  });
});
