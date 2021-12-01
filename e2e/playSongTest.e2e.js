describe('Play Songs', () => {
  const [C, D, E, F, G, A, B] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have initial text', async () => {
    const text = await element(by.text('POCKET PIANO'));

    await expect(text).toBeVisible();
  });

  it.only('Play Jingle Bells song', async () => {
    const cNoteKey = await element(by.id(`${C}-note-key`));
    const dNoteKey = await element(by.id(`${D}-note-key`));
    const eNoteKey = await element(by.id(`${E}-note-key`));
    const fNoteKey = await element(by.id(`${F}-note-key`));
    const gNoteKey = await element(by.id(`${G}-note-key`));

    await eNoteKey.tap();
    await eNoteKey.tap();
    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await eNoteKey.tap();
    await eNoteKey.tap();
    await eNoteKey.longPress();
    await eNoteKey.tap();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await gNoteKey.longPress();
    expect(element(by.text(`NOTE ${G}`))).toBeVisible();

    await cNoteKey.longPress();
    expect(element(by.text(`NOTE ${C}`))).toBeVisible();

    await dNoteKey.longPress();
    expect(element(by.text(`NOTE ${D}`))).toBeVisible();

    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await fNoteKey.tap();
    await fNoteKey.tap();
    await fNoteKey.longPress();
    await fNoteKey.tap();
    await fNoteKey.tap();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await eNoteKey.tap();
    await eNoteKey.tap();
    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await gNoteKey.longPress();
    expect(element(by.text(`NOTE ${G}`))).toBeVisible();

    await gNoteKey.tap();
    await gNoteKey.longPress();
    expect(element(by.text(`NOTE ${G}`))).toBeVisible();

    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await dNoteKey.longPress();
    expect(element(by.text(`NOTE ${D}`))).toBeVisible();

    await cNoteKey.longPress();
    expect(element(by.text(`NOTE ${C}`))).toBeVisible();
  });

  it('Play Do Re Mi Fa song', async () => {
    const cNoteKey = await element(by.id(`${C}-note-key`));
    const dNoteKey = await element(by.id(`${D}-note-key`));
    const eNoteKey = await element(by.id(`${E}-note-key`));
    const fNoteKey = await element(by.id(`${F}-note-key`));
    const gNoteKey = await element(by.id(`${G}-note-key`));

    await cNoteKey.longPress();
    expect(element(by.text(`NOTE ${C}`))).toBeVisible();

    await dNoteKey.longPress();
    expect(element(by.text(`NOTE ${D}`))).toBeVisible();

    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await fNoteKey.longPress();
    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await cNoteKey.longPress();
    expect(element(by.text(`NOTE ${C}`))).toBeVisible();

    await dNoteKey.longPress();
    await cNoteKey.longPress();
    await dNoteKey.longPress();
    await dNoteKey.longPress();
    await dNoteKey.longPress();

    expect(element(by.text(`NOTE ${D}`))).toBeVisible();

    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await gNoteKey.longPress();
    expect(element(by.text(`NOTE ${G}`))).toBeVisible();

    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await eNoteKey.longPress();
    await eNoteKey.longPress();
    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await cNoteKey.longPress();
    expect(element(by.text(`NOTE ${C}`))).toBeVisible();

    await dNoteKey.longPress();
    expect(element(by.text(`NOTE ${D}`))).toBeVisible();

    await eNoteKey.longPress();
    expect(element(by.text(`NOTE ${E}`))).toBeVisible();

    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();

    await fNoteKey.longPress();
    await fNoteKey.longPress();
    expect(element(by.text(`NOTE ${F}`))).toBeVisible();
  });
});
