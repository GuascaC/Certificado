<?php
	
	require('fpdf.php');
	
	class TextNormalizerFPDF extends FPDF
	{
		function __construct()
		{
			parent::__construct();
		}

		function MultiCell($w, $h, $txt, $border=0, $align='J', $fill=false)
		{
			parent::MultiCell($w, $h, $this->normalize($txt), $border, $align, $fill);
		}

		function Cell($w, $h=0, $txt='', $border=0, $ln=0, $align='', $fill=false, $link='')
		{
			parent::Cell($w, $h, $this->normalize($txt), $border, $ln, $align, $fill, $link);
		}

		function Write($h, $txt, $link='')
		{
			parent::Write($h, $this->normalize($txt), $link);
		}

		function Text($x, $y, $txt)
		{
			parent::Text($x, $y, $this->normalize($txt));
		}

		protected function normalize($word)
		{
			$word = str_replace("ò","%F2",$word);

			return urldecode($word);
		}

	}


	$pdf = new TextNormalizerFPDF();
	$pdf->AddPage();
	$pdf->SetFont('Arial','',16);
	$pdf->Cell(40,10,"Oggi è Giovedì e sono ±30°C ");
	$pdf->Output();

?>