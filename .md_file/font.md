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

For Tailwind / Next.js, I'd build the scale roughly like this:

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
  Main heading
</h1>

<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
  Section heading
</h2>

<h3 className="text-xl md:text-2xl font-semibold">
  Card heading
</h3>

<p className="text-base leading-7">
  Normal body content.
</p>

<p className="text-sm text-muted-foreground">
  Secondary information
</p>

<button className="text-sm font-medium">
  Continue
</button>
```

One detail that makes a big difference is **line length**. Body text shouldn't stretch across the entire screen. Aim for roughly **60–75 characters per line**, for example:

```tsx
<p className="max-w-2xl text-base leading-7">
```

For a polished SaaS/dashboard/product UI, my favorite baseline is **16px body + 14px secondary UI + 600-weight headings**. It's clean, readable, and doesn't have the oversized typography that makes many modern sites look like generic templates.
