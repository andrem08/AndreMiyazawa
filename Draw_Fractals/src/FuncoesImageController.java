public class FuncoesImageController {
    public static void main(String[] args) {
        // Create an instance of FuncoesImage
        FuncoesImage funcoesImage = new FuncoesImage(500, 500);

        // Call the methods of FuncoesImage
        funcoesImage.dragonCurve(0, 0, 500, 500, 10);
        funcoesImage.levyCurve(0, 0, 500, 500, 10);
        funcoesImage.kochCurve(0, 0, 500, 500, 10);
        funcoesImage.sierpinskiTriangle(0, 0, 500, 500, 10);
        funcoesImage.regionFill(250, 250, 0xFFFFFF);

        // Save the image
        funcoesImage.save("output.png");
    }
}