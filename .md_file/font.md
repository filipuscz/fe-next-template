For most modern websites, a strong default typography system is:

| Usage      | Desktop Size | Mobile Size |      Weight |
| ---------- | -----------: | ----------: | ----------: |
| Hero H1    |      48–64px |     36–44px |     600–700 |
| H1         |      40–48px |     32–40px |     600–700 |
| H2         |      32–40px |     28–32px |     600–700 |
| H3         |      24–28px |     22–24px |         600 |
| H4         |      20–24px |     18–20px |         600 |
| Body Large |      18–20px |        18px |         400 |
| Body       |     **16px** |    **16px** |     **400** |
| Small text |         14px |        14px |     400–500 |
| Caption    |      12–13px |     12–13px |     400–500 |
| Button     |      14–16px |     14–16px | **500–600** |
| Navigation |      14–16px |        16px |         500 |
| Input      |         16px |        16px |     400–500 |

### Best overall rule

For a professional Next.js website, I recommend using:

**Body**

```css
font-size: 16px;
font-weight: 400;
line-height: 1.5;
```

**Headings**

```css
font-weight: 600;
line-height: 1.1–1.25;
```

**Buttons / navigation**

```css
font-weight: 500;
```

Avoid using `font-weight: 700` everywhere. When everything is bold, nothing feels important.

A particularly good hierarchy is:

* `400` → normal content
* `500` → labels, buttons, navigation, emphasis
* `600` → headings
* `700` → hero text or very strong emphasis only