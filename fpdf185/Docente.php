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
			$word = str_replace("Á","%C1",$word);
			$word = str_replace("É","%C9",$word);
			$word = str_replace("Í","%CD",$word);
			$word = str_replace("Ó","%D3",$word);
			$word = str_replace("á","%E1",$word);
			$word = str_replace("é","%E9",$word);
			$word = str_replace("í","%ED",$word);
			$word = str_replace("ó","%F3",$word);
			$word = str_replace("ñ","%F1",$word);
			return urldecode($word);
		}
	}
    $pdf = new TextNormalizerFPDF('P','mm','Letter');
    $pdf->AddPage();
    $pdf->Image('001.jpg', 0, 0, 210, 280);
    $pdf->SetFont('Arial','B',14);
	$pdf->Cell(0,10,'.',0,0,'C');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,6,'LA FUNDACIÓN UNIVERSITARIA EMPRESARIAL DE',0,0,'C');
    $pdf->Ln();
    $pdf->Cell(0,6,'LA CÁMARA DE COMERCIO DE BOGOTÁ',0,0,'C');
    $pdf->Ln();
    $pdf->Cell(0,6,'-UNIEMPRESARIAL-',0,0,'C');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,8,'Personería Jurídica, Resolución 598 del 2 de abril de 2001 del Ministerio de',0,0,'C');
    $pdf->Ln();
    $pdf->Cell(0,3,'Educación Nacional - Registro ICFES 2738',0,0,'C');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetFont('Arial','B',14);
    $pdf->Cell(0,7,'CERTIFICA',0,0,'C');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetLeftMargin(28);
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,7,'Que el señor@ ________________________ identificad@ con cédula de ciudadanía',);
    $pdf->Ln();
    $pdf->Cell(0,7,'No.___________, está vinculado con la Fundación Universitaria Empresarial de la',);
    $pdf->Ln();
    $pdf->Cell(0,7,'Cámara  de Comercio de Bogotá Uniempresarial con NIT 830.084.876-6, desde el');
    $pdf->Ln();
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,7,'____________. Actualmente  desempeña el cargo  de DOCENTE ____________');
    $pdf->Ln();
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,7,'con dedicación _________ mediante un contrato a término _______, devengando ','0','0');
    $pdf->Ln();
    $pdf->Cell(0,7,'un salario de (letras y numeros)___________');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetLeftMargin(28);
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,10,'El presente certificado se expide  a solicitud del interesado  a los siete (07) días');
    $pdf->Ln();
    $pdf->Cell(0,3,'del mes de octubre de 2022.');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Cell(0,10,'Atentamente,');
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();
    $pdf->SetFont('Arial','B',12);
    $pdf->Cell(0,10,'LUZ YAZMÍN LIZARAZO JIMÉNEZ');
    $pdf->Ln();
    $pdf->SetFont('Arial','',12);
    $pdf->Cell(0,10,'Directora de Talento Humano');
    $pdf->Ln();
    $pdf->SetFont('Arial','',6);
    $pdf->Cell(0,3,'Proyectó: Nicol Valencia – Profesional de');
    $pdf->Ln();
    $pdf->Cell(0,1,'Nomina y Contratación 202211007-339');
    $pdf->Output();
?>